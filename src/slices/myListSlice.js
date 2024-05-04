import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovieDetails } from "../services/apiSelectedMovie";

const initialState = {
  movieList: [],
};

export const fetchDetailsAndAddToMyList = createAsyncThunk(
  "myList/fetchTopLevelDetails",
  async function (id) {
    const data = await getMovieDetails(id);
    return data;
  }
);

const myListSlice = createSlice({
  name: "myList",
  initialState,
  reducers: {
    addToMyList(state, action) {
      state.movieList = [...state.movieList, action.payload];
    },
    deleteFromMyList(state, action) {
      state.movieList = state.movieList.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchDetailsAndAddToMyList.fulfilled, (state, action) => {
      myListSlice.caseReducers.addToMyList(state, action);
    }),
});

export const { addToMyList, deleteFromMyList } = myListSlice.actions;

export default myListSlice.reducer;
