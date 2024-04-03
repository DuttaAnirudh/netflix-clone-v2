import GenreList from "./GenreList";

const Sidebar = ({ genreList }) => {
  return (
    <div className="sidebar__box">
      <GenreList genreList={genreList} sectionName={"sidebar"} />
    </div>
  );
};

export default Sidebar;
