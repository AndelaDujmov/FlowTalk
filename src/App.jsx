import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import ChatWindow from "./components/ChatWindow/ChatWindow";

function App() {

  return (
    <div className="app-container">
     
      <Routes>
        <Route path="/" element={<MainMenu />}/>
        <Route path="/chat" element={<ChatWindow />}/>
      </Routes>  
    
    </div>
  );
}

export default App;
