import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import Router from "./Pages/router";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <h1 className="text-center text-white font-bold p-5 " style={{backgroundColor:'orangered' }}>
        {currentRoute == "/" ? " Contact Management App" : "Charts and Maps"}
      </h1>
      <div className="flex w-full">
        <div
          className={`sticky top-0 h-screen ${isSidebarOpen ? "w-64" : "w-1"
            } bg-gray-100 transition-all ease-in-out duration-300`}
        >
          <button
            className={`w-full buton   text-right ${isSidebarOpen ? "" : "justify-center"
              }`}
            onClick={handleToggleSidebar}
          >
            {isSidebarOpen ? "❌" : "  ▶"}
          </button>
          {isSidebarOpen && <SideBar />}
        </div>
        <div className="w-full">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
