import HomePage from "./Pages/HomePage";
import SelectedMoviePage from "./Pages/SelectedMoviePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResultsPage from "./Pages/SearchResultsPage";
import GenreSearchResults from "./Pages/GenreSearchResults";
import AppLayout from "./AppLayout";

import { loader as genreListLoader } from "./AppLayout";
import { loader as homepageLoader } from "./Pages/HomePage";
import { loader as selectedMovieLoader } from "./Pages/SelectedMoviePage";
import { loader as searchQueryLoader } from "./Pages/SearchResultsPage";
import { loader as searchGenreLoader } from "./Pages/GenreSearchResults";
import Error from "./Components/Assets/Error";
import MyList from "./Pages/MyList";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: genreListLoader,
    errorElement: (
      <Error
        message={
          "Oops! Page not found. Please check the URL for any mistakes or try navigating back to the "
        }
        linkButton={"HomePage"}
      />
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: homepageLoader,
      },
      {
        path: "/search/:query",
        element: <SearchResultsPage />,
        loader: searchQueryLoader,
      },
      {
        path: "/genre/:genreName",
        element: <GenreSearchResults />,
        loader: searchGenreLoader,
      },
      {
        path: "/movie/:movieId",
        element: <SelectedMoviePage />,
        loader: selectedMovieLoader,
      },
      {
        path: "/mylist",
        element: <MyList />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
