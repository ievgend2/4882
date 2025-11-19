import houseRulesData from "../data/houseRulesData.js";
import troubleshootingData from "../data/troubleshootingData.js";

const checkoutChecklist = [
  "Place used towels in the tub and leave sheets on the beds.",
  "Start the dishwasher with remaining dishes and empty the coffee grounds.",
  "Take trash/recycling to the outdoor bin and make sure lids are latched.",
  "Set thermostats to 72°F (cool) or 68°F (heat), turn off lights, and lock doors.",
];

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

      <section className="support-grid">
        <article className="info-card checkout-card">
          <h3>Checkout Checklist</h3>
          <ul>
            {checkoutChecklist.map((item, index) => (
              <li key={`checkout-${index}`}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info-card troubleshoot-card">
          <h3>Quick Troubleshooting</h3>
          {troubleshootingData.map((issue) => (
            <div key={issue.title} className="troubleshoot-item">
              <h4>{issue.title}</h4>
              <p className="troubleshoot-summary">{issue.summary}</p>
              <ul>
                {issue.steps.map((step, index) => (
                  <li key={`${issue.title}-${index}`}>{step}</li>
                ))}
              </ul>
              {issue.mediaUrl && (
                <a
                  className="support-link"
                  href={issue.mediaUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {issue.mediaLabel || "View guide"}
                </a>
              )}
            </div>
          ))}
        </article>
      </section>

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
