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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

// function App() {
//   const [genreList, setGenreList] = useState(null);
//   const [searchValue, setSearchValue] = useState("");
//   const [selectedMovieId, setSelectedMovieId] = useState("");

//   useEffect(() => {
//     const fetchGenreList = async () => {
//       try {
//         const res = await fetch(`${API_URL_GENRE}/list?api_key=${KEY}`);

//         const data = await res.json();

//         setGenreList(data.genres);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchGenreList();
//   }, []);

//   return (
//     <div className="container">
//       <Header
//         genreList={genreList}
//         searchValue={searchValue}
//         setSearchValue={setSearchValue}
//       />

//       <div className="content">
//         <aside className="sidebar">
//           <SideBar genreList={genreList} />
//         </aside>

//         <div className="main">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <HomePage
//                   genreList={genreList}
//                   setSelectedMovieId={setSelectedMovieId}
//                 />
//               }
//             />

//             <Route
//               path="/search/:query"
//               element={
//                 <SearchResultsPage
//                   searchValue={searchValue}
//                   setSelectedMovieId={setSelectedMovieId}
//                 />
//               }
//             />

//             <Route
//               path="/genre/:genreName"
//               element={
//                 <GenreSearchResults setSelectedMovieId={setSelectedMovieId} />
//               }
//             />

//             <Route
//               path="/movie/:id"
//               element={
//                 <SelectedMoviePage
//                   selectedMovieId={selectedMovieId}
//                   setSelectedMovieId={setSelectedMovieId}
//                 />
//               }
//             />
//           </Routes>

//           {/*  */}
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
