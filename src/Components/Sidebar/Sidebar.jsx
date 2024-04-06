import NavList from "./NavList";

const Sidebar = ({ genreList }) => {
  return (
    <div className="sidebar__box">
      <NavList title="Genre" sectionName={"sidebar"} data={genreList} />
    </div>
  );
};

export default Sidebar;
