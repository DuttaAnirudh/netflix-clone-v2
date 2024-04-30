import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./slices/genreSlice";
import similarMovieReducer from "./slices/similarMovieSlice";

const store = configureStore({
  reducer: {
    genre: genreReducer,
    similarMovie: similarMovieReducer,
  },
});

export default store;
