import "./StatsCards.css";

const stats = [
  { value: 18, label: "Conditional", theme: "blue", action: "Offer letter" },
  { value: 22, label: "Un-Conditional", theme: "green", action: "Offer letter" },
  { value: 30, label: "Payment Received", theme: "yellow", action: "All Country" },
  { value: 8, label: "Payment Received", theme: "red", action: "Offer letter" },
  { value: 8, label: "VISA Received", theme: "gray", action: "Offer letter" },
];

export default function StatsCards() {
  return (
    <div className="stats-row">
      {stats.map((item, index) => (
        <div className={`stat-card ${item.theme}`} key={index}>
          {/* TOP CONTENT */}
          <div className="stat-content">
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>

          {/* BOTTOM ACTION */}
          <button className="stat-action">{item.action}</button>
        </div>
      ))}
    </div>
  );
}
