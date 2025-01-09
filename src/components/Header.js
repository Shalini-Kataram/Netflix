import React, { useEffect, useState } from "react";
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
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
    };

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
        <div className="flex justify-between absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10  ">
            <img src={LOGO} alt="netflix logo" className="w-44" />
            {user && (
                <div
                    className="relative inline-block mt-3"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img
                        className="w-12 h-12 rounded cursor-pointer"
                        src={user.photoURL}
                        alt="user icon"
                    />
                    {isDropdownVisible && (
                        <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48">
                            <ul className="p-2">
                                <li
                                    className="p-2 hover:bg-gray-700 rounded-md cursor-pointer"
                                    onClick={handleSignout}>
                                    Sign Out
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;
