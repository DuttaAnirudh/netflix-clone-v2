import { useSelector } from "react-redux";
import Error from "../Components/Assets/Error";
import MovieListBox from "../Components/Assets/MovieListBox";
import MenuTab from "../Components/Assets/MenuTab";

const MyList = () => {
  const myList = useSelector((store) => store.myList.movieList);
  if (myList.length === 0) {
    return (
      <>
        <MenuTab title="Categories" />
        <Error
          message="There are no movies in your list."
          linkButton={"Add Now!"}
        />
      </>
    );
  }
  return (
    <div>
      <MenuTab title="Categories" />
      <MovieListBox className="justify-start" data={myList} />
    </div>
  );
};

export default MyList;
