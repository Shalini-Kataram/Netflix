import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkFormValidation } from "../utils/validate";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isMessage, setIsMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignUp = () => {
        setIsSignIn(!isSignIn);
    };

    const handleClick = () => {
        const message = checkFormValidation(
            email.current.value,
            password.current.value
        );
        setIsMessage(message);
    };

    return (
        <div>
            <Header />
            <div>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
                    alt="background"
                    className="absolute"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="absolute p-12 bg-black bg-opacity-70 w-4/12 mt-20 mx-auto right-0 left-0 text-white border-black rounded-lg">
                <h1 className="font-bold text-3xl py-2 mb-4">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignIn && (
                    <input
                        type="name"
                        placeholder="Full Name"
                        className="p-4 my-2 w-full bg-transparent  border border-solid border-slate-400 rounded"
                    />
                )}
                <input
                    type="text"
                    ref={email}
                    placeholder="Email or mobile number"
                    className="p-4 my-2 w-full bg-transparent border border-solid border-slate-400 rounded"
                />

                <input
                    type="password"
                    ref={password}
                    placeholder="Password"
                    className="p-4 my-2 w-full bg-transparent  border border-solid border-slate-400 rounded"
                />
                {isMessage && (
                    <p className="text-red-700 font-bold py-1">{isMessage}</p>
                )}
                <button
                    className="p-4 my-2 bg-red-700 w-full rounded font-semibold hover:opacity-80"
                    onClick={handleClick}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <p>
                    {isSignIn ? "New to Netflix? " : "Already a member? "}

                    <Link
                        className="font-bold hover:underline"
                        onClick={toggleSignUp}>
                        {isSignIn ? "Sign up now." : "Sign in now."}
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
