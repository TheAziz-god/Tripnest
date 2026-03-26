import bali from "../assets/bali.jpg";
import paris from "../assets/paris.jpg";
import maldives from "../assets/maldives.jpg";
import dubai from "../assets/dubai.jpg";

function FeaturedTrips() {

  const trips = [
    {
      title: "Bali Beach Resort",
      price: "$1200",
      image: bali
    },
    {
      title: "Paris Romantic Tour",
      price: "$1800",
      image: paris
    },
    {
      title: "Maldives Luxury Stay",
      price: "$2500",
      image: maldives
    },
    {
      title: "Dubai City Adventure",
      price: "$1500",
      image: dubai
    }
  ];

  return (
    <section style={{ padding: "80px 60px", background: "#f9fafb" }}>

      <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
        Featured Trips
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "25px"
        }}
      >

        {trips.map((trip, index) => (

          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}
          >

            <img
              src={trip.image}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "20px" }}>

              <h3 style={{ marginBottom: "10px" }}>
                {trip.title}
              </h3>

              <p style={{ color: "#2563eb", fontWeight: "bold" }}>
                {trip.price}
              </p>

              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 16px",
                  border: "none",
                  borderRadius: "6px",
                  background: "#2563eb",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                View Trip
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedTrips;