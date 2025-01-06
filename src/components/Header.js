import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid,
                        email,
                        displayName,
                        photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="flex justify-between absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 ">
            <img src={LOGO} alt="netflix logo" className="w-44" />
            {user && (
                <div className="flex p-2">
                    <img
                        className="w-12 h-12"
                        src={user.photoURL}
                        alt="user icon"
                    />
                    <button
                        onClick={handleSignout}
                        className="font-bold text-white">
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
