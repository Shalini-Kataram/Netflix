import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: { nowPlayingMovies: null, trailerPlaying: null },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerPlaying: (state, action) => {
            state.trailerPlaying = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailerPlaying } = moviesSlice.actions;

export default moviesSlice.reducer;
