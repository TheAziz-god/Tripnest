import { useParams } from "react-router-dom";

import bali from "../assets/bali.jpg";
import paris from "../assets/paris.jpg";
import maldives from "../assets/maldives.jpg";
import dubai from "../assets/dubai.jpg";

function TripDetails() {

  const { id } = useParams();

  const trips = [
    {
      id: "1",
      title: "Bali Beach Resort",
      location: "Bali, Indonesia",
      price: "$1200",
      rating: "4.8",
      image: bali,
      description:
        "Enjoy a relaxing beach vacation in Bali with luxury resorts, tropical views, and unforgettable sunsets."
    },
    {
      id: "2",
      title: "Paris Romantic Escape",
      location: "Paris, France",
      price: "$1800",
      rating: "4.7",
      image: paris,
      description:
        "Discover the romance of Paris with guided city tours, Eiffel Tower visits, and charming cafes."
    },
    {
      id: "3",
      title: "Maldives Luxury Retreat",
      location: "Maldives",
      price: "$2500",
      rating: "4.9",
      image: maldives,
      description:
        "Experience crystal-clear water villas and white sand beaches in the luxurious Maldives."
    },
    {
      id: "4",
      title: "Dubai City Adventure",
      location: "Dubai, UAE",
      price: "$1500",
      rating: "4.6",
      image: dubai,
      description:
        "Explore Dubai's skyscrapers, desert safari, luxury shopping, and world-class entertainment."
    }
  ];

  const trip = trips.find(t => t.id === id);

  if (!trip) {
    return <h2 style={{ padding: "80px" }}>Trip not found</h2>;
  }

  return (

    <section style={{ padding: "80px 60px" }}>

      <img
        src={trip.image}
        style={{
          width: "100%",
          maxHeight: "420px",
          objectFit: "cover",
          borderRadius: "12px"
        }}
      />

      <div style={{ marginTop: "40px", maxWidth: "900px" }}>

        <h1 style={{ fontSize: "42px" }}>
          {trip.title}
        </h1>

        <p style={{ color: "#666", marginTop: "10px" }}>
          {trip.location}
        </p>

        <p style={{ marginTop: "10px" }}>
          ⭐ {trip.rating}
        </p>

        <h2 style={{ color: "#2563eb", marginTop: "20px" }}>
          {trip.price}
        </h2>

        <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
          {trip.description}
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            background: "#2563eb",
            border: "none",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Book Trip
        </button>

      </div>

    </section>

  );

}

export default TripDetails;