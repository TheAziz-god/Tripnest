function Inspiration() {

  const places = [
    {
      title: "Mountain Adventures",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      title: "Beach Escapes",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      title: "City Discoveries",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
    },
    {
      title: "Nature Retreats",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    }
  ];

  return (

    <section style={{
      padding:"80px 60px",
      background:"#f8fafc"
    }}>

      <h2 style={{
        textAlign:"center",
        fontSize:"36px",
        marginBottom:"50px"
      }}>
        Travel Inspiration
      </h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
        gap:"25px"
      }}>

        {places.map((place,index)=>(
          
          <div key={index} style={{
            borderRadius:"12px",
            overflow:"hidden",
            position:"relative"
          }}>

            <img
              src={place.image}
              style={{
                width:"100%",
                height:"250px",
                objectFit:"cover"
              }}
            />

            <h3 style={{
              position:"absolute",
              bottom:"15px",
              left:"20px",
              color:"white",
              fontSize:"24px",
              background:"rgba(0,0,0,0.4)",
              padding:"8px 12px",
              borderRadius:"6px"
            }}>
              {place.title}
            </h3>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Inspiration;