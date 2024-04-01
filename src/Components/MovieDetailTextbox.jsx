import PlayCircle from "../assets/play_circle.png";
import Button from "./Button";

const MovieDetailTextbox = ({ button = false }) => {
  return (
    <div className="banner__text-box">
      <h1 className="heading-primary">Puss in Boots: The Last Wish</h1>
      <div className="banner__year-rating">
        <p className="paragraph">2022</p>
        <p className="paragraph paragraph--light">8.5</p>
      </div>
      <div className="paragraph">Animation, Action, Adventure</div>
      <p className="paragraph mb-2">
        Puss in Boots discovers that his passion for adventure has taken its
        toll: He has burned through eight of his nine lives, leaving him with
        only one life left. Puss sets out on an epic journey to find the
        mythical Last Wish and restore his nine lives.
      </p>

      {button && (
        <Button
          classNameBtn={"banner__btn"}
          imageSrc={PlayCircle}
          classNameImg={"banner__btn-img"}
          alt={"Watch Now Button"}
        >
          Watch Now
        </Button>
      )}
    </div>
  );
};

export default MovieDetailTextbox;
