import "./Banner.css";
import BannerImage from "../../assets/Group 1000001201.png";

export default function Banner() {
  return (
    <div className="allied-banner-wrapper">
      <img src={BannerImage} alt="student" />
      <div className="allied-dots">
        <span className="dot" />
        <span className="dot active" />
        <span className="dot" />
      </div>
    </div>
  );
}
