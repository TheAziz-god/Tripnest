import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.2)",
        borderBottom: "1px solid rgba(255,255,255,0.3)",
        zIndex: 1000
      }}
    >
      <h2 style={{ color: "white", fontWeight: "600" }}>TripNest</h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/explore">Explore</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="#">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;