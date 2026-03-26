import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Explore() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {

    const fetchTrips = async () => {

      try {

        const res = await axios.get("http://localhost:5000/api/trips");

        setTrips(res.data);

      } catch (error) {

        console.error("Error fetching trips:", error);

      }

    };

    fetchTrips();

  }, []);

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
            key={trip._id}
            to={`/trip/${trip._id}`}
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
                    ${trip.price}
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