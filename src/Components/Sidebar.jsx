import NavList from "./NavList";

const Sidebar = () => {
  return (
    <div className="sidebar__box">
      <NavList
        title="Genre"
        sectionName="sidebar"
        array={["Action", "Drama", "Horror"]} // TEST
      />
    </div>
  );
};

export default Sidebar;
