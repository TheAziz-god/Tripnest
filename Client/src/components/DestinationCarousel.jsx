import bali from "../assets/bali.jpg";
import paris from "../assets/paris.jpg";
import maldives from "../assets/maldives.jpg";
import dubai from "../assets/dubai.jpg";

function DestinationCarousel() {

  const places = [
    { name: "Bali", image: bali },
    { name: "Paris", image: paris },
    { name: "Maldives", image: maldives },
    { name: "Dubai", image: dubai },
    { name: "Bali Coast", image: bali },
    { name: "Paris Lights", image: paris }
  ];

  return (

    <section style={{ padding: "80px 60px" }}>

      <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>
        Discover Destinations
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          paddingBottom: "10px"
        }}
      >

        {places.map((place, index) => (

          <div
            key={index}
            style={{
              minWidth: "260px",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              transition: "transform 0.3s ease"
            }}

            onMouseEnter={e=>{
              e.currentTarget.style.transform="scale(1.05)";
            }}

            onMouseLeave={e=>{
              e.currentTarget.style.transform="scale(1)";
            }}
          >

            <img
              src={place.image}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                padding: "15px",
                background: "linear-gradient(transparent,rgba(0,0,0,0.6))",
                color: "white"
              }}
            >
              <h3>{place.name}</h3>
            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default DestinationCarousel;