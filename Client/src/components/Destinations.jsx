import bali from "../assets/bali.jpg";
import paris from "../assets/paris.jpg";
import maldives from "../assets/maldives.jpg";
import dubai from "../assets/dubai.jpg";

function Destinations() {

  const places = [
    { name: "Bali", image: bali },
    { name: "Paris", image: paris },
    { name: "Maldives", image: maldives },
    { name: "Dubai", image: dubai }
  ];

  return (
    <section style={{ padding: "80px 60px" }}>

      <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
        Popular Destinations
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "25px"
        }}
      >

        {places.map((place, index) => (

          <div
            key={index}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}
          >

            <img
              src={place.image}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{place.name}</h3>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Destinations;