import { disasters } from "../data/disasters";

export default function DisasterPanel({ selected, onSelect }) {
  const disaster = disasters[selected];
  return (
    <section className="disaster-panel">
      <h2 className="section-title">Select Disaster Type</h2>
      <div className="disaster-tabs">
        {Object.keys(disasters).map((key) => (
          <button
            key={key}
            className={`disaster-tab ${selected === key ? "active" : ""}`}
            style={selected === key ? { borderColor: disasters[key].color, color: disasters[key].color } : {}}
            onClick={() => onSelect(key)}
          >
            <span className="tab-icon">{disasters[key].icon}</span>
            <span className="tab-label">{key}</span>
          </button>
        ))}
      </div>
      <div className="response-card" style={{ borderTopColor: disaster.color }}>
        <div className="response-header" style={{ background: disaster.color }}>
          <span className="response-icon">{disaster.icon}</span>
          <h3>{selected} — Immediate Response Steps</h3>
        </div>
        <ol className="steps-list">
          {disaster.safety_actions.map((action, i) => (
            <li key={i} className="step-item">
              <span className="step-number" style={{ background: disaster.color }}>{i + 1}</span>
              <span>{action}</span>
            </li>
          ))}
        </ol>
        <div className="evacuation-note">
          <span>🗺️</span>
          <p><strong>Evacuation:</strong> {disaster.evacuation}</p>
        </div>
      </div>
    </section>
  );
}