import Header from "./Header";
import SideBar from "./Sidebar";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="content">
        <aside className="sidebar">
          <SideBar />
        </aside>
      </div>
    </div>
  );
}

export default App;
