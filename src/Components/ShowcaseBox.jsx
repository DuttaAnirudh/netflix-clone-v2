import ShowcaseRow from "./ShowcaseRow";

const ShowcaseBox = () => {
  return (
    <section className="section-recommend">
      {/* SLIDER CONTAINER */}
      <ShowcaseRow title={"Weekly Trending"} />

      {/* SLIDER CONTAINER */}
      <ShowcaseRow title={"Top Rated Movies"} />
    </section>
  );
};

export default ShowcaseBox;
