import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./slices/genreSlice";
import similarMovieReducer from "./slices/similarMovieSlice";
import searchDataReducer from "./slices/searchDataSlice";

const store = configureStore({
  reducer: {
    genre: genreReducer,
    similarMovie: similarMovieReducer,
    searchMovieData: searchDataReducer,
  },
});

export default store;
