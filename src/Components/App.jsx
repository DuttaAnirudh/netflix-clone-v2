import Header from "./Header";
import Hero from "./Hero";
import SideBar from "./Sidebar";

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
        </div>
      </div>
    </div>
  );
}

export default App;
