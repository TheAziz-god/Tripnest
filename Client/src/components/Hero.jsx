import { useEffect, useRef } from "react";
import heroImage from "../assets/bali.jpg";

function Hero() {

  const bgRef = useRef(null);

  useEffect(() => {

    const handleMouseMove = (e) => {

      if (!bgRef.current) return;

      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);

  }, []);

  return (

    <section
      style={{
        minHeight: "90vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px"
      }}
    >

      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.3s ease-out"
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.4))"
        }}
      />

      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          maxWidth: "900px",
          width: "100%"
        }}
      >

        <h1
          style={{
            fontSize: "clamp(32px,6vw,56px)",
            marginBottom: "20px"
          }}
        >
          Discover Your Next Adventure
        </h1>

        <p
          style={{
            fontSize: "clamp(16px,2vw,20px)",
            marginBottom: "40px"
          }}
        >
          Smart travel planning for families and explorers
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "15px",
            borderRadius: "12px",
            backdropFilter: "blur(18px)",
            background: "rgba(255,255,255,0.2)",
            border: "1px solid rgba(255,255,255,0.3)"
          }}
        >

          <input
            placeholder="Where are you going?"
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              flex: "1",
              minWidth: "180px"
            }}
          />

          <input
            type="date"
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "6px"
            }}
          />

          <input
            placeholder="Guests"
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              width: "90px"
            }}
          />

          <button
            style={{
              padding: "12px 20px",
              background: "#2563eb",
              border: "none",
              borderRadius: "6px",
              color: "white",
              cursor: "pointer"
            }}
          >
            Search
          </button>

        </div>

      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          color: "white",
          fontSize: "14px",
          opacity: 0.8,
          animation: "bounce 2s infinite"
        }}
      >
        ↓ Scroll to explore
      </div>

      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>

    </section>

  );

}

export default Hero;