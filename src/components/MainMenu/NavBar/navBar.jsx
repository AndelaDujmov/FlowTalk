import { Link } from "react-router-dom";
import BarItem from "./barItem";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const NavBar = ({ mode, setMode }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "60px",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <BarItem name="FlowTalk" font="20px Sans-Serif, oblique" />
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link to="/chat" style={{ textDecoration: "none", color: "white" }}>
          <BarItem name="Start Chat" />
        </Link>
        <Link to="/contacts" style={{ textDecoration: "none", color: "white" }}>
          <BarItem name="Contacts" />
        </Link>
        <Link to="/notifications" style={{ textDecoration: "none", color: "white" }}>
          <BarItem name="Notifications" />
        </Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginRight: "27px" }}>
        <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
          <BarItem name="Profile" />
        </Link>
        <button
          className="mode-toggle"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          style={{
            padding: "10px",
            background: "gray",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {mode === "light" ? <MdOutlineLightMode /> : <FaRegMoon />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
