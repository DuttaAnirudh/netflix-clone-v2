import SliderContainer from "../Assets/SliderContainer";

const VideoRow = ({ data }) => {
  return (
    <div className="section-trailer">
      {/* TRAILER SECTION TITLE  */}
      <h2 className="heading-secondary mb-2">Trailers and Clips</h2>

      {/* ROW TRAILORS & CLIPS  */}
      <SliderContainer className={"trailer-row"}>
        {/* CONTAINER TRAILOR  */}
        {data.map((key) => (
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
