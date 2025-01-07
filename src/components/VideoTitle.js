import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-36 px-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="text-6xl font-bold text-white">{title}</h1>
            <p className="py-6 w-2/5 text-white">{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-16 text-lg rounded">
                    Play
                </button>
                <button className="mx-2 bg-gray-500 text-black p-4 px-10 text-lg rounded">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
