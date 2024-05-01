import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL_SEARCH, KEY } from "../utils/helpers";

const getSearchedMovieList = async (query, pageNum = 1) => {
  try {
    const res = await fetch(
      `${API_URL_SEARCH}?query=${query}&api_key=${KEY}&page=${pageNum}`
    );
    const data = await res.json();

    const totalPages = data.total_pages;

    const movieData = data.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        year: movie.release_date,
        rating: movie.vote_average,
        posterImg: movie.poster_path,
      };
    });

    return { movieData, totalPages };
  } catch (err) {
    console.error(err);
  }
};

const initialState = {
  searchData: null,
};

export const fetchSearchDataForNextPage = createAsyncThunk(
  "searchData/fetchSearchDataForNextPage",
  async function (arg) {
    const searchQueryData = await getSearchedMovieList(arg.query, arg.pageNum);
    return searchQueryData;
  }
);

const searchDataSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    updateSearchData(state, action) {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchSearchDataForNextPage.fulfilled, (state, action) => {
      state.searchData = action.payload.movieData;
      state.currentPage++;
    }),
});

export const { updateSearchData } = searchDataSlice.actions;

export default searchDataSlice.reducer;
