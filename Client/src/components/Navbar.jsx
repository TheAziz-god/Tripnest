import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 60px",
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}
    >
      <h2 style={{ color: "#2563eb" }}>TripNest</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;