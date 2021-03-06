import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginFormModal.css"

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <>
            <div className="loginErrorsDivContainer">
                {errors.map((error, idx) => (
                    <div className="signUpErrorMessage" key={idx}>{error}</div>
                ))}
            </div>
            <form className="loginForm" onSubmit={handleSubmit}>



                <p> Log In </p>
                <input
                    type="text"
                    placeholder="Username or Email"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                    className="formItem"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="formItem"
                />
                <button className="formItem" id="loginButton2" type="submit">Log In</button>
            </form>
        </>
    );
}

export default LoginForm;