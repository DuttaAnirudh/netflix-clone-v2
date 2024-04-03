import NavList from "./NavList";

const GenreList = ({ sectionName, genreList }) => {
  return <NavList title="Genre" sectionName={sectionName} data={genreList} />;
};

export default GenreList;
