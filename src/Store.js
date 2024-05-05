import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./slices/genreSlice";
import similarMovieReducer from "./slices/similarMovieSlice";
import searchDataReducer from "./slices/searchDataSlice";
import showMenuReducer from "./slices/showMenuSlice";
import myListReducer from "./slices/myListSlice";
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
  reducer: {
    genre: genreReducer,
    similarMovie: similarMovieReducer,
    searchMovieData: searchDataReducer,
    showMenu: showMenuReducer,
    myList: myListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export const persistor = persistStore(store);
