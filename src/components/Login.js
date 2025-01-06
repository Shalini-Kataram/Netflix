import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkFormValidation } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { BACK, PHOTO } from "../utils/constants";

const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [isMessage, setIsMessage] = useState(null);

    const name = useRef(null);

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
        if (message) return;
        if (!isSignIn) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: { PHOTO },
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispatch(
                                addUser({
                                    uid,
                                    email,
                                    displayName,
                                    photoURL,
                                })
                            );
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            setIsMessage(errorMessage);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setIsMessage(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setIsMessage(errorCode + "-" + errorMessage);
                });
        }
    };

    return (
        <div>
            <Header />
            <div>
                <img src={BACK} alt="background" className="absolute" />
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
                        ref={name}
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
