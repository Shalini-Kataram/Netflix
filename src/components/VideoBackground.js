import React from "react";
import useTrailerPlaying from "../hooks/useTrailerPlaying";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id }) => {
    const trailerID = useSelector((store) => store.movies.trailerPlaying);
    useTrailerPlaying(movie_id);
    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                    trailerID?.key +
                    "?&autoplay=1&mute=1"
                }
                title="Gladiator II | Final Trailer (2024) - Paul Mescal, Pedro Pascal, Denzel Washington, Ridley Scott"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    );
};

export default VideoBackground;
