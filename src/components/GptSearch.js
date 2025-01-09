import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BACK } from "../utils/constants";

const GptSearch = () => {
    return (
        <>
            <div className="absolute -z-10">
                <img src={BACK} alt="logo" className="" />
            </div>
            <div className="">
                <GptSearchBar />
                <GptSuggestions />
            </div>
        </>
    );
};

export default GptSearch;
