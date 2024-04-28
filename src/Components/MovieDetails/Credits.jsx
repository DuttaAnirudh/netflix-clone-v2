const Credits = ({ data }) => {
  const actors = data.dataActors;
  const director = data.dataDirector;
  return (
    <>
      <div className="movie__cast">
        <p className="paragraph">Starring</p>
        <p className="paragraph paragraph--light">{actors.join(", ")}</p>
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
