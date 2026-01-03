import { useState } from "react";
import "./Filters.css";
import { BsCalendar, BsChevronDown, BsGlobe } from "react-icons/bs";

export default function Filters() {
  const [values, setValues] = useState({
    year: "",
    dateCreated: "",
    intake: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!values.year) newErrors.year = "Year is required";
    if (!values.dateCreated) newErrors.dateCreated = "Date Created is required";
    if (!values.intake) newErrors.intake = "Intake is required";
    if (!values.country) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log("Applied Filters:", values);
  };

  return (
    <div className="filters-card">
      <div className="filters-row">
        <FilterInput
          icon={<BsCalendar />}
          placeholder="Year"
          value={values.year}
          error={errors.year}
          onChange={(v) => handleChange("year", v)}
        />

        <FilterInput
          icon={<BsCalendar />}
          placeholder="Date Created"
          value={values.dateCreated}
          error={errors.dateCreated}
          onChange={(v) => handleChange("dateCreated", v)}
        />

        <FilterInput
          icon={<BsCalendar />}
          placeholder="Select intake"
          value={values.intake}
          error={errors.intake}
          onChange={(v) => handleChange("intake", v)}
        />
      </div>

      <div className="filters-row">
        <FilterInput
          icon={<BsGlobe />}
          placeholder="Countries"
          value={values.country}
          error={errors.country}
          onChange={(v) => handleChange("country", v)}
        />

        <button className="apply-btn" onClick={handleSubmit}>
          Apply Filters
        </button>
      </div>
    </div>
  );
}

function FilterInput({ icon, placeholder, value, onChange, error }) {
  return (
    <div className="filter-field">
      <div className={`filter-input ${error ? "error" : ""}`}>
        <span className="left-icon">{icon}</span>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="right-icon">
          <BsChevronDown />
        </span>
      </div>
    </div>
  );
}

