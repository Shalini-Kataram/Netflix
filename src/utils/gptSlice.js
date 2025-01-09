import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "GPT",
    initialState: { toggleSearch: false },
    reducers: {
        addToggleSearch: (state) => {
            state.toggleSearch = !state.toggleSearch;
        },
    },
});

export const { addToggleSearch } = gptSlice.actions;

export default gptSlice.reducer;
