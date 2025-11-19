import howToData from "../data/howToData.js";

function HowTo() {
  return (
    <section className="page how-to-page">
      <div className="info-card hero-card rules-hero">
        <h2>How-To Guides</h2>
        <p className="intro">
          Follow these step-by-step guides for the most commonly used appliances
          and amenities in the house.
        </p>
      </div>
      <div className="card-list">
        {howToData.map((item) => (
          <article key={item.title} className="guide-card">
            <h3>{item.title}</h3>
            <p className="description">{item.description}</p>
            <ol>
              {item.steps.map((step, index) => (
                <li key={`${item.title}-${index}`}>{step}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowTo;
