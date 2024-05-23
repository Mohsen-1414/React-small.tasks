import "./App.css";
import SideBar from "./component";
import menus from "./component/data";

function App() {
  return (
    <div>
      <SideBar menus={menus} />
    </div>
  );
}

export default App;
