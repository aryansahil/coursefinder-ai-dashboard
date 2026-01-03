import "./ContactRegionalManager.css";

const managers = [
  {
    name: "Rahul Verma",
    phone: "+91 9876543210",
    location: "Hyderabad",
    email: "rahul.verma@kcoverseas.com",
    avatar: "https://i.pravatar.cc/100?img=10",
  },
  {
    name: "Kushal Singh",
    phone: "+91 9226541220",
    location: "Nagpur",
    email: "kushal.singh@kcoverseas.com",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "Santosh Sharma",
    phone: "+91 9116344611",
    location: "Hyderabad",
    email: "santosh.sharma@kcoverseas.com",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
];

export default function ContactRegionalManager() {
  return (
    <div className="crm-wrapper">
      <h6 className="crm-title">Contact Regional Manager</h6>

      <div className="crm-card">
        {managers.map((m, index) => (
          <div
            className={`crm-item ${
              index !== managers.length - 1 ? "with-divider" : ""
            }`}
            key={index}
          >
            <div className="crm-top">
              <img src={m.avatar} alt={m.name} />
              <div className="crm-info">
                <span className="crm-name">{m.name}</span>
                <span className="crm-meta">
                  {m.phone} <span className="sep">|</span> {m.location}
                </span>
              </div>
            </div>

            <div className="crm-email">{m.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
