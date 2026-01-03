import { useState } from "react";
import "./NewsBulletin.css";
import { BsNewspaper } from "react-icons/bs";

const NEWS_ITEMS = [
  {
    title: "Indian student tops Harvard!",
    description:
      "Indian student tops Harvard university and makes history. Its the first time for an Indian student to do this.",
  },
  {
    title: "New visa rules announced",
    description:
      "New student visa rules announced for international students starting next year. Major changes expected.",
  },
  {
    title: "Universities expand scholarships",
    description:
      "Top global universities expand scholarship opportunities for international students.",
  },
];

export default function NewsBulletin() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNews = NEWS_ITEMS[activeIndex];

  return (
    <div className="news-card">
      <h6 className="news-title">News Bulletin</h6>

      <div className="news-content">
        <div className="news-icon">
          <BsNewspaper />
        </div>

        <div className="news-text">
          <h5>{activeNews.title}</h5>
          <p>
            {activeNews.description}{" "}
            <span className="read-more text-decoration-underline">
              Read More
            </span>
          </p>
        </div>
      </div>

      <div className="news-dots">
        {NEWS_ITEMS.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
