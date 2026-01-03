import { useState } from "react";
import "./UpcomingEvents.css";
import {
  BsChevronLeft,
  BsChevronRight,
  BsGeoAlt,
  BsPerson,
} from "react-icons/bs";

import EventImage from "../../assets/Mask group.png";

const EVENTS = [
  {
    title: "Event Name Goes here",
    date: "7 Jan 2023",
    time: "4:30 PM",
    location: "University of New York",
    organizer: "By Kishori Gupta",
    image: EventImage,
  },
  {
    title: "International Education Fair",
    date: "15 Feb 2023",
    time: "11:00 AM",
    location: "London Business School",
    organizer: "By John Smith",
    image:
      "https://plus.unsplash.com/premium_photo-1713296254777-0a89f05dcb60?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Study Abroad Webinar",
    date: "28 Mar 2023",
    time: "6:00 PM",
    location: "Online Event",
    organizer: "By Global Edu",
    image:
      "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D",
  },
];

export default function UpcomingEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = EVENTS[activeIndex];

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === EVENTS.length - 1;

  const handlePrev = () => {
    if (!isFirst) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="event-card">
      {/* HEADER */}
      <div className="event-header">
        <h6>Upcoming Events</h6>

        <div className="event-nav">
          <button onClick={handlePrev} disabled={isFirst}>
            <BsChevronLeft />
          </button>

          <button onClick={handleNext} disabled={isLast}>
            <BsChevronRight />
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="event-image">
        <img src={activeEvent.image} alt="event" />
      </div>

      {/* CONTENT */}
      <div className="event-body">
        <h5>{activeEvent.title}</h5>

        <div className="event-date-row">
          <span className="event-date">{activeEvent.date}</span>
          <span className="event-time">{activeEvent.time}</span>
        </div>

        <div className="event-meta">
          <div>
            <BsGeoAlt />
            <span>{activeEvent.location}</span>
          </div>

          <div>
            <BsPerson />
            <span>{activeEvent.organizer}</span>
          </div>
        </div>

        <button className="event-cta">Register Now</button>
      </div>
    </div>
  );
}
