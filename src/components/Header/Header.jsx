import "./Header.css";
import { BsChevronDown } from "react-icons/bs";
import Searchbar from "../../assets/icons/searchbar.svg";
import Notification from "../../assets/icons/notification.svg";
import Announcement from "../../assets/icons/announcement.svg";
import { FiMenu } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

export default function Header({ onMenuClick }) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        <div className="profile-wrapper" ref={popoverRef}>
          <div className="user" onClick={() => setOpen((v) => !v)}>
            <img
              src="https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8?q=80&w=1176&auto=format&fit=crop"
              alt="user"
            />
            <span className="username">Sahil Aryan</span>
            <BsChevronDown />
          </div>

          {open && (
            <div className="profile-popover">
              <button onClick={() => alert("Profile clicked")}>
                My Profile
              </button>
              <button onClick={() => alert("Settings clicked")}>
                Settings
              </button>
              <hr />
              <button className="logout" onClick={() => alert("Logout")}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
