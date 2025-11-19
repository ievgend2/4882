import houseRulesData from "../data/houseRulesData.js";

function HouseRules() {
  return (
    <section className="page rules-page">
      <div className="info-card hero-card rules-hero">
        <h2>House Rules</h2>
        <p className="intro">
          A few friendly reminders to keep everything running smoothly for you and the next guests.
        </p>
      </div>

      <div className="rules-grid">
        {houseRulesData.map((section) => (
          <article key={section.title} className="info-card rule-card">
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, index) => (
                <li key={`${section.title}-${index}`}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="info-card rules-note">
        <h3>Need Something?</h3>
        <p>
          Text us anytime through the Airbnb app or at <strong>(555) 123-4882</strong>. We are happy
          to help with recommendations, maintenance issues, or anything that would make your stay
          easier.
        </p>
      </article>
    </section>
  );
}

export default HouseRules;
