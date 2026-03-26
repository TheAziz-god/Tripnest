import bali from "../assets/bali.jpg";
import paris from "../assets/paris.jpg";
import maldives from "../assets/maldives.jpg";
import dubai from "../assets/dubai.jpg";

function Explore() {

  const trips = [
    {
      title: "Bali Beach Resort",
      location: "Bali, Indonesia",
      price: "$1200",
      rating: "4.8",
      image: bali
    },
    {
      title: "Paris Romantic Escape",
      location: "Paris, France",
      price: "$1800",
      rating: "4.7",
      image: paris
    },
    {
      title: "Maldives Luxury Retreat",
      location: "Maldives",
      price: "$2500",
      rating: "4.9",
      image: maldives
    },
    {
      title: "Dubai City Adventure",
      location: "Dubai, UAE",
      price: "$1500",
      rating: "4.6",
      image: dubai
    }
  ];

  return (
    <section style={{ padding: "80px 60px" }}>

      <h1 style={{ fontSize: "36px", marginBottom: "40px" }}>
        Explore Trips
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px"
        }}
      >

        {trips.map((trip, index) => (

          <div
            key={index}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              background: "white",
              cursor: "pointer"
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

            <div style={{ padding: "18px" }}>

              <h3 style={{ marginBottom: "6px" }}>
                {trip.title}
              </h3>

              <p style={{ color: "#666", fontSize: "14px" }}>
                {trip.location}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "12px"
                }}
              >

                <span style={{ fontWeight: "bold", color: "#2563eb" }}>
                  {trip.price}
                </span>

                <span>
                  ⭐ {trip.rating}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Explore;