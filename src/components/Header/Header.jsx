import "./Header.css";
import { BsChevronDown } from "react-icons/bs";
import Searchbar from "../../assets/icons/searchbar.svg";
import Notification from "../../assets/icons/notification.svg";
import Announcement from "../../assets/icons/announcement.svg";
import { FiMenu } from "react-icons/fi";

export default function Header({ onMenuClick }) {
  return (
    <header className="cf-header">
      <div className="cf-header-left">
        <button className="hamburger" onClick={onMenuClick}>
          <FiMenu size={22} />
        </button>
        <span className="cf-logo" onClick={() => (window.location.href = "/")}>
          coursefinder.ai
        </span>
      </div>

      <div className="cf-header-center">
        <img src={Searchbar} alt="search-icon" className="search-icon" />
        <input type="text" placeholder="Search by student name, ack no." />
      </div>

      <div className="cf-header-right">
        <div className="whats-new">
          <img src={Announcement} alt="Announcement" />
          <span className="text-decoration-underline">Whats New?</span>
        </div>

        <div className="notification">
          <img src={Notification} alt="notification" />
          <span className="badge">2</span>
        </div>

        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
          />
          <span className="username">Sahil Aryan</span>
          <BsChevronDown />
        </div>
      </div>
    </header>
  );
}
