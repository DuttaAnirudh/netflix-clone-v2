import MovieListBox from "./MovieListBox";

const ResultsPage = ({ searchValue, data }) => {
  return (
    <>
      {/* SEARCH QUERY INPUT DETAILS */}
      <section className="section-query-details mb-4">
        <p className="paragrapgh paragraph--red">Results for</p>
        <p className="heading-primary heading-primary--bold">
          &quot;{searchValue}&quot;
        </p>
      </section>
      {/* MOVIES GRID LIST */}
      <MovieListBox data={data} />
    </>
  );
};

export default ResultsPage;
