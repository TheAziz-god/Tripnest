function Footer() {

  return (

    <footer
      style={{
        background:"#111",
        color:"white",
        padding:"60px 40px",
        marginTop:"80px"
      }}
    >

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
        gap:"40px"
      }}>

        <div>
          <h3>TripNest</h3>
          <p style={{color:"#aaa"}}>
            Smart travel planning for families and explorers.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Press</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Safety</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Explore</h4>
          <p>Destinations</p>
          <p>Trips</p>
          <p>Travel Guides</p>
        </div>

      </div>

      <hr style={{margin:"40px 0",borderColor:"#333"}} />

      <p style={{textAlign:"center",color:"#aaa"}}>
        © 2026 TripNest — All rights reserved
      </p>

    </footer>

  );

}

export default Footer;