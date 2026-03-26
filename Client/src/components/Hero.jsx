import heroImage from "../assets/bali.jpg";

function Hero() {
  return (
    <section
      style={{
        height: "85vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.45)"
        }}
      />

      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          maxWidth: "800px"
        }}
      >

        <h1
          style={{
            fontSize: "52px",
            marginBottom: "20px"
          }}
        >
          Discover Your Next Adventure
        </h1>

        <p
          style={{
            fontSize: "20px",
            marginBottom: "40px"
          }}
        >
          Plan unforgettable trips with your family and friends
        </p>

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
            background: "white",
            padding: "12px",
            borderRadius: "10px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
          }}
        >

          <input
            type="text"
            placeholder="Where are you going?"
            style={{
              padding: "10px",
              border: "none",
              outline: "none"
            }}
          />

          <input
            type="date"
            style={{
              padding: "10px",
              border: "none",
              outline: "none"
            }}
          />

          <input
            type="number"
            placeholder="Guests"
            style={{
              padding: "10px",
              border: "none",
              outline: "none",
              width: "80px"
            }}
          />

          <button
            style={{
              padding: "10px 18px",
              border: "none",
              background: "#2563eb",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Search
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;