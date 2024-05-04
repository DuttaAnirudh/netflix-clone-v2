import { useSelector } from "react-redux";
import Error from "../Components/Assets/Error";
import MovieListBox from "../Components/Assets/MovieListBox";

const MyList = () => {
  const myList = useSelector((store) => store.myList.movieList);
  if (myList.length === 0) {
    return (
      <Error
        message="There are no movies in your list."
        linkButton={"Add Now!"}
      />
    );
  }
  return (
    <div>
      <MovieListBox className="justify-start" data={myList} />
    </div>
  );
};

export default MyList;
