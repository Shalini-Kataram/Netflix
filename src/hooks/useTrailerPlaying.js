import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerPlaying } from "../utils/moviesSlice";

const useTrailerPlaying = (movieID) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
        const filteredData = json.results.filter(
            (video) => video.type === "Trailer"
        );
        const trailer = filteredData.length ? filteredData[1] : json.results[0];
        dispatch(addTrailerPlaying(trailer));
    };
    useEffect(() => {
        getMovieTrailer();
    }, []);
};

export default useTrailerPlaying;
