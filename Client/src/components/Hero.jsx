function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "120px 20px",
        background: "linear-gradient(135deg,#e0f2fe,#f8fafc)"
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Plan Your Perfect Family Trip
      </h1>

      <p style={{ fontSize: "20px", color: "#555", marginBottom: "40px" }}>
        Discover amazing destinations around the world
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap"
        }}
      >
        <input
          type="text"
          placeholder="Where are you going?"
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            width: "220px"
          }}
        />

        <input
          type="date"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd"
          }}
        />

        <input
          type="number"
          placeholder="Guests"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            width: "120px"
          }}
        />

        <button
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default Hero;