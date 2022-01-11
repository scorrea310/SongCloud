const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const csurf = require('csurf')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const { environment } = require('./config')
const isProduction = environment === 'production'
const routes = require('./routes');
const { ValidationError } = require('sequelize');

const app = express();

//middleware for logging information about requests and responses:
app.use(morgan('dev'));

//makes parsing cookies easier
app.use(cookieParser())

app.use(express.urlencoded({ extended: false }));
//parses json bodies of requests for us
app.use(express.json())


// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(helmet({
    contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
);

app.use(routes);



/*
this is a regualr middleware function that
will run when no other routes are caught,
therefore it creates an error (404).
*/
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});


app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
    }
    next(err);
});


app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;