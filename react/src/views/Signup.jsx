import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/ContextProvider";

function Signup() {
    const { user, token, setToken, setUser } = useStateContext();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmRef.current.value,
        };
        console.log(payload);
        axiosClient
            .post("/signup", payload)
            .then(({ data }) => {
                console.log(data);
                setToken(data.token);
                setUser(data.user);
            })
            .catch((err) => {
                console.log(err);
                const response = err.response;
                if (response && response.status == 422) {
                    //its validation error
                    console.log(response.data.errors);
                }
            });
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form action="" onSubmit={onSubmit}>
                    <h1>Create an account</h1>
                    <input ref={nameRef} placeholder="Full Name" type="text" />
                    <input ref={emailRef} placeholder="Email" type="email" />
                    <input
                        ref={passwordRef}
                        placeholder="Password"
                        type="password"
                    />
                    <input
                        ref={passwordConfirmRef}
                        placeholder="Password Confirm"
                        type="password"
                    />
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Already Registered ? <Link to={`/login`}>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
