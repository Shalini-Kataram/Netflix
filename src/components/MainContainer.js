import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[0];

    return (
        <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
            <VideoBackground movie_id={mainMovie.id} />
        </div>
    );
};

export default MainContainer;
