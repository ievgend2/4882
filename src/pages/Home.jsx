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
      await navigator.clipboard.writeText("1234Oakwood!");
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

      <section className="info-card gallery-card">
        <h3>Photo Highlights</h3>
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
          <li>Check-in: 4 PM</li>
          <li>Check-out: 11 AM</li>
        </ul>
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
              <strong>1234Oakwood!</strong>
            </div>
            <p className="qr-note">QR encodes the Wi-Fi credentials (WPA2). Aim your phone’s camera to join.</p>
          </div>
          <img src={wifiQRCode} alt="Wi-Fi QR code for 4882Guest" className="wifi-qr" />
        </div>
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
