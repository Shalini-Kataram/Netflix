import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[0];

    return (
        <div>
            <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
            <VideoBackground movie_id={mainMovie.id} />
        </div>
    );
};

export default MainContainer;
