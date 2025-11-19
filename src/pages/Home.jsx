import { useEffect, useState } from "react";

const galleryImages = [
  { src: `${import.meta.env.BASE_URL}images/dining.jpg`, alt: "Dining room" },
  { src: `${import.meta.env.BASE_URL}images/kitchen.jpg`, alt: "Kitchen" },
  { src: `${import.meta.env.BASE_URL}images/bedroom.jpg`, alt: "Bedroom" },
  { src: `${import.meta.env.BASE_URL}images/front.jpeg`, alt: "Front" }
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const selectedImage =
    activeIndex !== null ? galleryImages[activeIndex] : null;

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

      <section className="info-card">
        <h3>Parking</h3>
        <p>
          Please park in the driveway spaces only. Street parking is not allowed per  guidelines, so kindly stay
          within the driveway or garage area to avoid violations.
        </p>
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
