const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const csurf = require('csurf')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const { environment } = require('./config')
const isProduction = environment === 'production'
const routes = require('./routes');

const app = express();

//middleware for logging information about requests and responses:
app.use(morgan('dev'));

//makes parsing cookies easier
app.use(cookieParser())


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

module.exports = app;