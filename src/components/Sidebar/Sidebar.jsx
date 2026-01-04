import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { BsChevronDown, BsHouse } from "react-icons/bs";

import Home from "../../assets/icons/home.svg";
import Student from "../../assets/icons/student.svg";
import Applications from "../../assets/icons/applications.svg";
import Search from "../../assets/icons/search.svg";
import Wallet from "../../assets/icons/wallet.svg";
import Commission from "../../assets/icons/commission.svg";
import Services from "../../assets/icons/services.svg";
import Info from "../../assets/icons/info.svg";
import Links from "../../assets/icons/links.svg";
import Feedback from "../../assets/icons/feedback.svg";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`cf-sidebar ${isOpen ? "open" : ""}`}>
      <nav className="cf-sidebar-menu">
        <SidebarItem to="/" icon={Home} label="Dashboard" />
        <SidebarItem to="/students" icon={Student} label="Students" />
        <SidebarItem
          to="/applications"
          icon={Applications}
          label="Applications"
        />
        <SidebarItem to="/search" icon={Search} label="Search Courses" />
        <SidebarItem to="/wallet" icon={Wallet} label="Wallet" />
        <SidebarItem
          to="/commission"
          icon={Commission}
          label="Commission Payments"
        />

        <SidebarItem
          to="/services"
          icon={Services}
          label="Allied Services"
          suffix={<BsChevronDown />}
        />

        <SidebarItem to="/learning" icon={Info} label="Learning Resources" />

        <SidebarItem
          to="/links"
          icon={Links}
          label="Quick Links"
          suffix={<BsChevronDown />}
        />
      </nav>

      <div className="cf-sidebar-footer">
        <SidebarItem to="/feedback" icon={Feedback} label="Submit feedback" />
      </div>
    </aside>
  );
}

function SidebarItem({ to, icon, label, suffix }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `cf-sidebar-item ${isActive ? "active" : ""}`
      }
    >
      <div className="left">
        <span className="icon">
          {to === "/" ? <BsHouse color="black" size="20px" /> : <img src={icon} alt={label} />}
        </span>
        <span className="text">{label}</span>
      </div>
      {suffix && <span className="suffix">{suffix}</span>}
    </NavLink>
  );
}
