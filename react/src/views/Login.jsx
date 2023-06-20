import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axiosClient";

function Login() {
    const passwordRef = useRef();
    const emailRef = useRef();
    const { setToken, setUser } = useStateContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setToken(data?.token);
                setUser(data?.user);
                console.log(data.user);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form action="" onSubmit={onSubmit}>
                    <h1>Login to your account</h1>
                    <input ref={emailRef} placeholder="Email" type="email" />
                    <input
                        ref={passwordRef}
                        placeholder="Password"
                        type="password"
                    />
                    <button className="btn btn-block">login</button>
                    <p className="message">
                        Not Registered ?{" "}
                        <Link to={`/signup`}>Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
