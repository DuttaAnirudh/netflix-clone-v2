const VideoRow = () => {
  return (
    <div className="section-trailer">
      {/* TRAILER SECTION TITLE  */}
      <h2 className="heading-secondary mb-2">Trailers and Clips</h2>

      {/* ROW TRAILORS & CLIPS  */}
      <div className="trailer-row slider-box" id="videos-row">
        {/* CONTAINER TRAILOR  */}
        <div className="trailer__card">
          <img
            src="/src/assets/video-bg-icon.png"
            alt="trailor icon"
            className="trailer__background"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoRow;
