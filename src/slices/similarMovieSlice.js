import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSimilarMovies } from "../services/apiSelectedMovie";

const initialState = {
  status: "idle",
  similarMovieList: [],
};

export const fetchMoreSimilarMovies = createAsyncThunk(
  "similarMovies/fetchMoreSimilarMovies",
  async function (arg) {
    const similarMoviesData = await getSimilarMovies(arg.id, arg.pageNum);
    return similarMoviesData;
  }
);

const similarMovieSlice = createSlice({
  name: "similarMovies",
  initialState,
  reducers: {
    updateSimilarMovieList(state, action) {
      state.similarMovieList = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchMoreSimilarMovies.fulfilled, (state, action) => {
      state.similarMovieList = [...state.similarMovieList, ...action.payload];
    }),
});

export const { updateSimilarMovieList } = similarMovieSlice.actions;

export default similarMovieSlice.reducer;
