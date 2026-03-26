import { useEffect, useState } from "react";
import API from "../services/api";

function Explore() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {

      const res = await API.get("/trips");

      setTrips(res.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (

    <section style={{ padding: "60px" }}>

      <h1 style={{ fontSize: "40px", marginBottom: "40px" }}>
        Explore Destinations
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
          gap: "30px"
        }}
      >

        {trips.map((trip) => (

          <div
            key={trip._id}
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              background: "white"
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="destination"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "20px" }}>

              <h3>{trip.title}</h3>

              <p style={{ color: "#777" }}>
                {trip.destination}
              </p>

              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                {new Date(trip.startDate).toDateString()} -
                {new Date(trip.endDate).toDateString()}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Explore;