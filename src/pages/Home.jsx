const galleryImages = [
  { src: `${import.meta.env.BASE_URL}images/dining.jpg`, alt: "Dining room" },
  { src: `${import.meta.env.BASE_URL}images/kitchen.jpg`, alt: "Kitchen" },
  { src: `${import.meta.env.BASE_URL}images/bedroom.jpg`, alt: "Bedroom" }
];

function Home() {
  return (
    <section className="page home-page">
      <div className="info-card hero-card">
        <h2>Welcome to 4882 Retreat</h2>
        <p className="intro">
          We are so happy to host you. This simple guide gives you quick access to everything you
          need for a smooth stay—house rules, Wi-Fi details, and appliance instructions.
        </p>
      </div>

      <section className="info-card gallery-card">
        <h3>Photo Highlights</h3>
        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} />
          ))}
        </div>
      </section>

      <section className="info-card">
        <h3>Quick Facts</h3>
        <ul>
          <li>
            Wi-Fi name: <strong>4882Guest</strong>
          </li>
          <li>
            Wi-Fi password: <strong>1234Oakwood!</strong>
          </li>
          <li>Quiet hours: 10 PM – 8 AM</li>
          <li>Check-out: 11:00 AM</li>
        </ul>
      </section>

      <section className="info-card">
        <h3>Parking</h3>
        <p>
          Please park in the driveway spaces only. Street parking is not allowed per HOA, so kindly stay
          within the driveway or garage area to avoid violations.
        </p>
      </section>
    </section>
  );
}

export default Home;
