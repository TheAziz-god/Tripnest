import { useEffect, useState } from "react";
import API from "../services/api";

function Explore() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    try {

      const res = await API.get("/trips");

      setTrips(res.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div style={{ padding: "60px" }}>

      <h1 style={{ fontSize: "40px", marginBottom: "40px" }}>
        Explore Destinations
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: "30px"
        }}
      >

        {trips.map((trip) => (

          <div
            key={trip._id}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              background: "white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
          >

            <img
              src={trip.image}
              alt={trip.destination}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "20px" }}>

              <h3>{trip.title}</h3>

              <p style={{ color: "#777" }}>
                {trip.destination}
              </p>

              <p style={{ fontWeight: "bold" }}>
                ${trip.price}
              </p>

              <p style={{ fontSize: "14px", color: "#999" }}>
                ⭐ {trip.rating}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Explore;