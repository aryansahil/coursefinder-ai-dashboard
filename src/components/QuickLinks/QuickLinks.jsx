import "./QuickLinks.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function QuickLinks() {
  const links = [
    "Learning Resources",
    "Learning Resources",
    "Learning Resources",
    "Learning Resources",
    "Learning Resources",
  ];

  return (
    <div className="quick-links">
      <h6 className="quick-links-title">Quick Links</h6>

      <div className="quick-links-list">
        {links.map((label, index) => (
          <div className="quick-link-item" key={index}>
            <span className="link-text text-decoration-underline">{label}</span>
            <BsBoxArrowUpRight className="link-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
