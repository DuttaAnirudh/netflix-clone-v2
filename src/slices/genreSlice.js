import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genreList: [],
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    loadGenreList(state, action) {
      state.genreList = action.payload;
    },
  },
});

export const { loadGenreList } = genreSlice.actions;

export const getGenre = (state) => state.genre.genreList;

export default genreSlice.reducer;
