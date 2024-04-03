import Header from "./Header";
import Hero from "./Hero/Hero";
import ShowcaseBox from "./Showcase/ShowcaseBox";
import SideBar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="content">
        <aside className="sidebar">
          <SideBar />
        </aside>

        <div className="main">
          <Hero />
          <ShowcaseBox />
        </div>
      </div>
    </div>
  );
}

export default App;
