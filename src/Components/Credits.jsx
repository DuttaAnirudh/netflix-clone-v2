import { useEffect, useState } from "react";
import { API_URL, KEY } from "../constants";

const Credits = ({ selectedMovieId }) => {
  const [actorsData, setActorsData] = useState([]);
  const [director, setDirector] = useState("");

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const res = await fetch(
          `${API_URL}/${selectedMovieId}/credits?api_key=${KEY}`
        );
        const data = await res.json();

        // Filtering only the first 10 actors
        const dataActors = data.cast
          .filter((el) => el.known_for_department === "Acting")
          .slice(0, 10)
          .map((el) => el.name);

        // Filtering only the first director
        const dataDirector = data.crew.filter(
          (el) => el.known_for_department === "Directing"
        )[0];

        setActorsData(dataActors);
        setDirector(dataDirector);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieCast();
  }, [selectedMovieId]);

  return (
    <>
      <div className="movie__cast">
        <p className="paragraph">Starring</p>
        <p className="paragraph paragraph--light">{actorsData.join(", ")}</p>
      </div>

      <div className="movie__cast mb-4">
        <p className="paragraph">Directed By</p>
        <p className="paragraph paragraph--light">
          {director ? director.name : "N.A"}
        </p>
      </div>
    </>
  );
};

export default Credits;
