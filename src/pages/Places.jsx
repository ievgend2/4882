import placesData from "../data/placesData.js";

function formatDistance(miles) {
  return Number(miles).toFixed(1);
}

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function PlaceListItem({ place, onDirectionsClick }) {
  const distanceLabel = `${place.driveMinutes} min • ${formatDistance(place.distanceMiles)} mi`;

  return (
    <li className="place-item">
      <div className="place-heading">
        <span className="place-name" title={place.name}>
          {place.name}
        </span>
        <span className="place-distance">{distanceLabel}</span>
      </div>
      <p className="place-desc">{place.description}</p>
      <div className="place-actions">
        <button
          type="button"
          className="map-link"
          onClick={onDirectionsClick}
          aria-label={`Get directions to ${place.name}`}
        >
          Directions
        </button>
      </div>
    </li>
  );
}

function Places() {
  const handleDirectionsClick = (place) => (event) => {
    event.preventDefault();
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;
    const appleMapsUrl = `http://maps.apple.com/?daddr=${place.lat},${place.lng}`;

    let destinationUrl = googleMapsUrl;
    if (isMobileDevice()) {
      const useAppleMaps = window.confirm(
        "Open in Apple Maps?\nTap 'OK' for Apple Maps or 'Cancel' for Google Maps."
      );
      destinationUrl = useAppleMaps ? appleMapsUrl : googleMapsUrl;
    }

    window.open(destinationUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="page places-page">
      <div className="info-card hero-card places-hero">
        <h2>Local Favorites</h2>
        <p className="intro">
          Explore our go-to coffee shops, dinner spots, and outdoor adventures all within a quick
          drive from the house.
        </p>
      </div>

      <div className="places-grid">
        {placesData.map((category) => (
          <article key={category.category} className="info-card place-card">
            <div className="place-header">
              <h3>{category.category}</h3>
              <p className="place-summary">{category.summary}</p>
            </div>
            <ul>
              {category.places.map((place) => (
                <PlaceListItem
                  key={place.name}
                  place={place}
                  onDirectionsClick={handleDirectionsClick(place)}
                />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Places;
