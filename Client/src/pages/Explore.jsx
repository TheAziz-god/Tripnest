import { Link } from "react-router-dom";

import bali from "../assets/bali.jpg";
import paris from "../assets/paris.jpg";
import maldives from "../assets/maldives.jpg";
import dubai from "../assets/dubai.jpg";

function Explore() {

  const trips = [
    {
      id: "1",
      title: "Bali Beach Resort",
      location: "Bali, Indonesia",
      price: "$1200",
      rating: "4.8",
      image: bali
    },
    {
      id: "2",
      title: "Paris Romantic Escape",
      location: "Paris, France",
      price: "$1800",
      rating: "4.7",
      image: paris
    },
    {
      id: "3",
      title: "Maldives Luxury Retreat",
      location: "Maldives",
      price: "$2500",
      rating: "4.9",
      image: maldives
    },
    {
      id: "4",
      title: "Dubai City Adventure",
      location: "Dubai, UAE",
      price: "$1500",
      rating: "4.6",
      image: dubai
    }
  ];

  return (

    <section
      style={{
        padding: "80px 60px",
        background: "linear-gradient(135deg,#f1f5f9,#e0f2fe)",
        minHeight: "100vh"
      }}
    >

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "50px",
          textAlign: "center"
        }}
      >
        Explore Trips
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "35px"
        }}
      >

        {trips.map((trip)=> (

          <Link
            key={trip.id}
            to={`/trip/${trip.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >

            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                background: "white",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
            >

              <img
                src={trip.image}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "20px" }}>

                <h3>{trip.title}</h3>

                <p style={{ color: "#666", fontSize: "14px" }}>
                  {trip.location}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px"
                  }}
                >

                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#2563eb"
                    }}
                  >
                    {trip.price}
                  </span>

                  <span>
                    ⭐ {trip.rating}
                  </span>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

}

export default Explore;