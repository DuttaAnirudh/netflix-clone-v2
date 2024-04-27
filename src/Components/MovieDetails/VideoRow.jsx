import { useEffect, useState } from "react";
import SliderContainer from "../Assets/SliderContainer";
import { API_URL, KEY } from "../../utils/helpers";

const VideoRow = ({ selectedMovieId }) => {
  const [videoKeys, setVideoKeys] = useState([]);

  useEffect(() => {
    const fetchMovieVideos = async () => {
      try {
        const res = await fetch(
          `${API_URL}/${selectedMovieId}/videos?api_key=${KEY}`
        );
        const data = await res.json();

        const movieVideos = data.results
          .filter(
            (vidInfo) =>
              vidInfo.type === "Teaser" ||
              vidInfo.type === "Trailer" ||
              vidInfo.type === "Clip"
          )
          .map((vidInfo) => vidInfo.key);

        setVideoKeys(movieVideos);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieVideos();
  }, [selectedMovieId]);

  return (
    <div className="section-trailer">
      {/* TRAILER SECTION TITLE  */}
      <h2 className="heading-secondary mb-2">Trailers and Clips</h2>

      {/* ROW TRAILORS & CLIPS  */}
      <SliderContainer className={"trailer-row"}>
        {/* CONTAINER TRAILOR  */}
        {videoKeys.map((key) => (
          <div className="trailer__card" key={key}>
            <iframe
              width="450"
              height="250"
              src={`https://www.youtube.com/embed/${key}?enablejsapi=1&theme=dark&color=white&rel=0`}
              frameBorder="0"
              allowFullScreen="1"
            />
          </div>
        ))}
      </SliderContainer>
    </div>
  );
};

export default VideoRow;
