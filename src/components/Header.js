import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { addToggleSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGPTSearch = useSelector((store) => store.gpt.toggleSearch);
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    const handleToggle = () => {
        dispatch(addToggleSearch());
    };

    const handleLanguageChange = (e) => {
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
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
                    {showGPTSearch && (
                        <select
                            className="p-2 m-2 bg-gray-900 text-white flex rounded"
                            onChange={handleLanguageChange}>
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option
                                    key={lang.identifier}
                                    value={lang.identifier}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}
                    <button
                        className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                        onClick={handleToggle}>
                        {showGPTSearch ? "Homepage" : "GPTSearch"}
                    </button>
                    <img
                        className="w-12 h-12 rounded"
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
