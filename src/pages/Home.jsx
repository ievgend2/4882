import { useState } from "react";

const galleryBase = `${import.meta.env.BASE_URL}images/airbnb/`;
const galleryWebpBase = `${import.meta.env.BASE_URL}images/airbnb-webp/`;

const galleryImages = [
  {
    jpg: `${galleryBase}living%20room%201.jpg`,
    webp: `${galleryWebpBase}living%20room%201.webp`,
    alt: "Living room sectional with natural light and wall art",
  },
  {
    jpg: `${galleryBase}living%20room%202.jpg`,
    webp: `${galleryWebpBase}living%20room%202.webp`,
    alt: "Living room detail with accent chairs and smart TV",
  },
  {
    jpg: `${galleryBase}exterior.jpg`,
    webp: `${galleryWebpBase}exterior.webp`,
    alt: "Front exterior of 4882 Retreat at dusk",
  },
  {
    jpg: `${galleryBase}kitchen%201.jpg`,
    webp: `${galleryWebpBase}kitchen%201.webp`,
    alt: "Kitchen overview featuring oversized island seating",
  },
  {
    jpg: `${galleryBase}kitchen%202.jpg`,
    webp: `${galleryWebpBase}kitchen%202.webp`,
    alt: "Kitchen detail showing range, hood, and quartz counters",
  },
  {
    jpg: `${galleryBase}kitchen%203.jpg`,
    webp: `${galleryWebpBase}kitchen%203.webp`,
    alt: "Kitchen coffee bar with brewer and open shelving",
  },
  {
    jpg: `${galleryBase}dining%20room.jpg`,
    webp: `${galleryWebpBase}dining%20room.webp`,
    alt: "Dining room table set for six guests",
  },
  {
    jpg: `${galleryBase}master%20bedroom%201.jpg`,
    webp: `${galleryWebpBase}master%20bedroom%201.webp`,
    alt: "Primary bedroom with king bed and reading lamps",
  },
  {
    jpg: `${galleryBase}queen%20bedroom%201.jpg`,
    webp: `${galleryWebpBase}queen%20bedroom%201.webp`,
    alt: "Queen bedroom featuring board and batten accent wall",
  },
  {
    jpg: `${galleryBase}guest%20bedroom.jpg`,
    webp: `${galleryWebpBase}guest%20bedroom.webp`,
    alt: "Guest bedroom with twin beds and nightstand",
  },
  {
    jpg: `${galleryBase}master%20bathroom%201.jpg`,
    webp: `${galleryWebpBase}master%20bathroom%201.webp`,
    alt: "Primary bath dual vanity with gold fixtures",
  },
];

function Home() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [hasCopiedWifi, setHasCopiedWifi] = useState(false);
  const highlightedImage = galleryImages[galleryIndex];
  const wifiQRCode = `${import.meta.env.BASE_URL}images/wifi-qr.png`;

  const showSliderPrev = () => {
    setGalleryIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showSliderNext = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
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
          We are so happy to host you. This simple guide gives you quick access
          to everything you need for a smooth stay—house rules, Wi-Fi details,
          and appliance instructions.
        </p>
      </div>

      <section className="gallery-section">
        <div className="gallery-heading">
          <h2>Photo Gallery</h2>
        </div>
        <div className="gallery-shell">
          <aside className="info-card gallery-panel">
            <h3>What Guests Love</h3>
            <ul>
              <li>
                Open-concept kitchen with an oversized island for family
                breakfasts.
              </li>
            </ul>
            <div className="gallery-stats">
              <div>
                <span className="label">
                  Sleeps: <strong>6 Guests</strong>
                </span>
              </div>
              <div>
                <span className="label">
                  Beds: <strong>3 Beds</strong>
                </span>
              </div>
              <div>
                <span className="label">
                  Baths
                  <strong>2 Full</strong>
                </span>
              </div>
            </div>
          </aside>
          <article className="info-card gallery-main">
            <div className="gallery-hero">
              <button
                type="button"
                className="hero-nav hero-nav--previous"
                onClick={showSliderPrev}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <picture>
                <source srcSet={highlightedImage.webp} type="image/webp" />
                <source srcSet={highlightedImage.jpg} type="image/jpeg" />
                <img
                  src={highlightedImage.jpg}
                  alt={highlightedImage.alt}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />
              </picture>
              <button
                type="button"
                className="hero-nav hero-nav--next"
                onClick={showSliderNext}
                aria-label="Next photo"
              >
                ›
              </button>
              <span className="hero-counter">
                {galleryIndex + 1}/{galleryImages.length}
              </span>
            </div>
            <div className="hero-thumbs">
              {galleryImages.map((img, index) => (
                <button
                  key={img.jpg}
                  type="button"
                  className={`hero-thumb${
                    index === galleryIndex ? " is-active" : ""
                  }`}
                  onClick={() => setGalleryIndex(index)}
                  aria-label={`Preview ${img.alt}`}
                >
                  <picture>
                    <source srcSet={img.webp} type="image/webp" />
                    <source srcSet={img.jpg} type="image/jpeg" />
                    <img
                      src={img.jpg}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                    />
                  </picture>
                </button>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="arrival-grid">
        <article className="info-card arrival-card">
          <h3>Before You Arrive</h3>
          <ul className="arrival-list">
            <li>
              Self check-in begins at 4:00 PM—request early check-in in the
              Airbnb app and we’ll confirm if available.
            </li>
            <li>
              Your personal smart-lock code arrives in your Airbnb inbox the
              morning of arrival; have a photo ID handy.
            </li>
            <li>
              Text us when you’re 30 minutes out so we can ensure the porch
              lights and climate are dialed in.
            </li>
          </ul>
        </article>

        <article className="info-card arrival-card">
          <h3>Driving & Parking</h3>
          <p>
            From downtown Southport, head west on E Moore, turn left on NC-211,
            then right on Abbington Oaks Way SE—the home is on the left at{" "}
            <strong>4882</strong> with the cedar planter box.
          </p>
          <ul className="arrival-list">
            <li>
              Use the circular driveway—there’s room for <strong>3 cars</strong>
              ; additional vehicles can stage in the garage.
            </li>
            <li>
              Please avoid street parking to keep HOA neighbors happy and ensure
              trash pick-up clears the road.
            </li>
          </ul>
        </article>
      </section>

      <section className="info-card wifi-card">
        <div className="wifi-header">
          <div>
            <h3>Wi-Fi Access</h3>
            <p>Scan or tap to connect instantly upon arrival.</p>
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={handleCopyWifi}
          >
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
            <p className="qr-note">
              Scan the QR or copy the password above to connect instantly.
            </p>
          </div>
          <div className="wifi-qr-wrapper">
            <img
              src={wifiQRCode}
              alt="Wi-Fi QR code for 4882Guest"
              className="wifi-qr"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>
        </div>
      </section>

      <section className="info-card stay-essentials">
        <article className="essentials-card">
          <h3>Climate & Comfort</h3>
          <ul>
            <li>
              Thermostat in the main hallway—keep between{" "}
              <strong>68°–75°F</strong> to protect the HVAC. One click toggles
              heat vs. cool.
            </li>
            <li>
              Ceiling fans are remote controlled (labelled by room). Please
              switch them off when you leave.
            </li>
            <li>
              Tankless water heater provides endless hot water; if it cools,
              pause for 30 seconds and turn the handle fully to hot.
            </li>
          </ul>
        </article>

        <article className="essentials-card">
          <h3>Supplies We Stock</h3>
          <ul>
            <li>
              Pantry starter kit: coffee, tea, filters, olive oil, seasonings,
              foil/plastic wrap, dishwasher pods.
            </li>
            <li>
              Bath amenities: shampoo/conditioner, body wash, make-up towels,
              cotton swabs, hair dryer, and a first-aid kit under the vanity.
            </li>
            <li>
              Beach gear: four chairs, umbrella, cooler, boogie boards, and
              beach towels—find them on the garage rack.
            </li>
          </ul>
        </article>

        <article className="essentials-card emergency-card">
          <h3>Emergency & Transport</h3>
          <ul>
            <li>
              <strong>Emergency:</strong> Dial 911. Southport Fire Station #2
              (3.5 mi) and Brunswick Medical Center (15 mi) are the closest.
            </li>
            <li>
              <strong>Urgent Care:</strong> Novant Health Express, 4721
              Southport-Supply Rd SE (8 min drive). CVS at 5006 Southport
              Crossing Way is open late.
            </li>
            <li>
              <strong>Transportation:</strong> Bald Head Island Ferry runs
              hourly (check baldheadisland.com). Closest EV charger: 111 W Brown
              St public lot.
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Home;
