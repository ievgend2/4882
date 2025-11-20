import { useEffect, useState } from "react";

const galleryImages = [
  { src: `${import.meta.env.BASE_URL}images/dining.jpg`, alt: "Dining room" },
  { src: `${import.meta.env.BASE_URL}images/kitchen.jpg`, alt: "Kitchen" },
  { src: `${import.meta.env.BASE_URL}images/bedroom.jpg`, alt: "Bedroom" },
  { src: `${import.meta.env.BASE_URL}images/front.jpeg`, alt: "Front" }
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hasCopiedWifi, setHasCopiedWifi] = useState(false);
  const selectedImage =
    activeIndex !== null ? galleryImages[activeIndex] : null;
  const wifiQRCode = `${import.meta.env.BASE_URL}images/wifi-qr.png`;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight" && activeIndex !== null) {
        setActiveIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (event.key === "ArrowLeft" && activeIndex !== null) {
        setActiveIndex(
          (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => setActiveIndex(null);
  const showPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handleCopyWifi = async () => {
    try {
      await navigator.clipboard.writeText("1234Southport!");
      setHasCopiedWifi(true);
      setTimeout(() => setHasCopiedWifi(false), 2000);
    } catch (error) {
      setHasCopiedWifi(false);
    }
  };

  return (
    <section className="page home-page">
      <div className="info-card hero-card">
        <h2>Welcome to 4882 Retreat</h2>
        <p className="intro">
          We are so happy to host you. This simple guide gives you quick access to everything you
          need for a smooth stay—house rules, Wi-Fi details, and appliance instructions.
        </p>
      </div>

      <section className="gallery-section">
        <div className="gallery-heading">
          <h2>Photo Gallery</h2>
          <p>Scroll through a few of our favorite corners—the slider below opens larger views with a tap.</p>
        </div>
        <div className="gallery-layout">
          <article className="info-card gallery-card">
            <div className="gallery-grid">
              {galleryImages.map((img, index) => (
                <button
                  key={img.src}
                  type="button"
                  className="gallery-thumb"
                  onClick={() => handleImageClick(index)}
                  aria-label={`Enlarge ${img.alt}`}
                >
                  <img src={img.src} alt={img.alt} />
                </button>
              ))}
            </div>
          </article>
          <aside className="info-card gallery-details">
            <h3>What Guests Love</h3>
            <ul>
              <li>Open-concept kitchen with an oversized island for family breakfasts.</li>
              <li>Sunroom overlooking the pines—perfect for morning coffee or remote work.</li>
              <li>Two king suites plus a bunk room, all with blackout shades and ceiling fans.</li>
            </ul>
            <div className="gallery-stats">
              <div>
                <span className="label">Sleeps</span>
                <strong>8 Guests</strong>
              </div>
              <div>
                <span className="label">Beds</span>
                <strong>4 Beds</strong>
              </div>
              <div>
                <span className="label">Baths</span>
                <strong>3 Full</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="arrival-grid">
        <article className="info-card arrival-card">
          <h3>Before You Arrive</h3>
          <ul className="arrival-list">
            <li>Self check-in begins at 4:00 PM—request early check-in in the Airbnb app and we’ll confirm if available.</li>
            <li>Your personal smart-lock code arrives in your Airbnb inbox the morning of arrival; have a photo ID handy.</li>
            <li>Text us when you’re 30 minutes out so we can ensure the porch lights and climate are dialed in.</li>
          </ul>
        </article>

        <article className="info-card arrival-card">
          <h3>Driving & Parking</h3>
          <p>
            From downtown Southport, head west on E Moore, turn left on NC-211, then right on Abbington Oaks Way SE—the home is on the
            left at <strong>4882</strong> with the cedar planter box.
          </p>
          <ul className="arrival-list">
            <li>Use the circular driveway—there’s room for <strong>3 cars</strong>; additional vehicles can stage in the garage.</li>
            <li>Please avoid street parking to keep HOA neighbors happy and ensure trash pick-up clears the road.</li>
            <li>Boat trailers may park on the gravel pad along the right fence—let us know beforehand.</li>
          </ul>
        </article>
      </section>

      <section className="info-card wifi-card">
        <div className="wifi-header">
          <div>
            <h3>Wi-Fi Access</h3>
            <p>Scan or tap to connect instantly upon arrival.</p>
          </div>
          <button type="button" className="copy-button" onClick={handleCopyWifi}>
            {hasCopiedWifi ? "Copied!" : "Copy Password"}
          </button>
        </div>
        <div className="wifi-content">
          <div className="wifi-credentials">
            <div>
              <span className="label">Network</span>
              <strong>4882Guest</strong>
            </div>
            <div>
              <span className="label">Password</span>
              <strong>1234Southport!</strong>
            </div>
            <p className="qr-note">Scan the QR or copy the password above to connect instantly.</p>
          </div>
          <div className="wifi-qr-wrapper">
            <img src={wifiQRCode} alt="Wi-Fi QR code for 4882Guest" className="wifi-qr" />
            <span className="label">Best scanned 4–6 ft away</span>
          </div>
        </div>
      </section>

      <section className="info-card stay-essentials">
        <article className="essentials-card">
          <h3>Climate & Comfort</h3>
          <ul>
            <li>Thermostat in the main hallway—keep between <strong>68°–75°F</strong> to protect the HVAC. One click toggles heat vs. cool.</li>
            <li>Ceiling fans are remote controlled (labelled by room). Please switch them off when you leave.</li>
            <li>Tankless water heater provides endless hot water; if it cools, pause for 30 seconds and turn the handle fully to hot.</li>
          </ul>
        </article>

        <article className="essentials-card">
          <h3>Supplies We Stock</h3>
          <ul>
            <li>Pantry starter kit: coffee, tea, filters, olive oil, seasonings, foil/plastic wrap, dishwasher pods.</li>
            <li>Bath amenities: shampoo/conditioner, body wash, make-up towels, cotton swabs, hair dryer, and a first-aid kit under the vanity.</li>
            <li>Beach gear: four chairs, umbrella, cooler, boogie boards, and beach towels—find them on the garage rack.</li>
          </ul>
        </article>

        <article className="essentials-card emergency-card">
          <h3>Emergency & Transport</h3>
          <ul>
            <li><strong>Emergency:</strong> Dial 911. Southport Fire Station #2 (3.5 mi) and Brunswick Medical Center (15 mi) are the closest.</li>
            <li><strong>Urgent Care:</strong> Novant Health Express, 4721 Southport-Supply Rd SE (8 min drive). CVS at 5006 Southport Crossing Way is open late.</li>
            <li><strong>Transportation:</strong> Bald Head Island Ferry runs hourly (check baldheadisland.com). Closest EV charger: 111 W Brown St public lot.</li>
          </ul>
        </article>
      </section>

      {selectedImage && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${selectedImage.alt}`}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <div className="modal-viewer">
              <button
                type="button"
                className="modal-nav modal-nav--previous"
                onClick={showPrevious}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <img
                className="modal-image"
                src={selectedImage.src}
                alt={selectedImage.alt}
              />
              <button
                type="button"
                className="modal-nav modal-nav--next"
                onClick={showNext}
                aria-label="Next photo"
              >
                ›
              </button>
            </div>
            <p className="modal-caption">
              {selectedImage.alt} ({activeIndex + 1}/{galleryImages.length})
            </p>
            <div className="modal-thumbnails" aria-label="Select photo">
              {galleryImages.map((img, index) => (
                <button
                  key={img.src}
                  type="button"
                  className={`modal-thumb${
                    index === activeIndex ? " is-active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${img.alt}`}
                >
                  <img src={img.src} alt="" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
