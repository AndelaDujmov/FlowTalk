import { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import NavBar from "./components/MainMenu/NavBar/navBar";


function App() {
  const [mode, setMode] = useState("light");

  return (
    <div className={`app-container ${mode}`}>
      <NavBar >
      <button className="mode-toggle" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        Switch to {mode === "light" ? "Dark" : "Light"} Mode
      </button>
      <MainMenu />
      </NavBar>
    </div>
  );
}

export default App;
