import { useEffect, useRef, useState } from "react";
import "./Filters.css";
import { BsCalendar, BsGlobe } from "react-icons/bs";

const YEARS = [
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
];

const INTAKES = [
  "Jan 2024",
  "May 2024",
  "Sep 2024",
  "Jan 2025",
  "May 2025",
  "Sep 2025",
];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "New Zealand",
  "Germany",
  "France",
  "Netherlands",
  "Ireland",
  "Singapore",
  "UAE",
];

export default function Filters() {
  const [values, setValues] = useState({
    year: "",
    dateCreated: "",
    intake: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
    setOpen(null);
  };

  const validate = () => {
    const newErrors = {};

    if (!values.year) newErrors.year = "Year is required";
    if (!values.dateCreated) newErrors.dateCreated = "Date is required";
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
    <div className="filters-card" ref={wrapperRef}>
      <div className="filters-row">
        <Dropdown
          icon={<BsCalendar />}
          placeholder="Year"
          value={values.year}
          error={errors.year}
          open={open === "year"}
          onToggle={() => setOpen(open === "year" ? null : "year")}
          options={YEARS}
          onSelect={(v) => handleChange("year", v)}
        />

        <DateInput
          icon={<BsCalendar />}
          placeholder="Date Created"
          value={values.dateCreated}
          error={errors.dateCreated}
          onChange={(v) => handleChange("dateCreated", v)}
        />

        <Dropdown
          icon={<BsCalendar />}
          placeholder="Select intake"
          value={values.intake}
          error={errors.intake}
          open={open === "intake"}
          onToggle={() => setOpen(open === "intake" ? null : "intake")}
          options={INTAKES}
          onSelect={(v) => handleChange("intake", v)}
        />
      </div>

      <div className="filters-row">
        <Dropdown
          icon={<BsGlobe />}
          placeholder="Countries"
          value={values.country}
          error={errors.country}
          open={open === "country"}
          onToggle={() => setOpen(open === "country" ? null : "country")}
          options={COUNTRIES}
          onSelect={(v) => handleChange("country", v)}
        />

        <button className="apply-btn" onClick={handleSubmit}>
          Apply Filters
        </button>
      </div>
    </div>
  );
}

function Dropdown({
  icon,
  placeholder,
  value,
  options,
  onSelect,
  error,
}) {
  return (
    <div className="filter-field dropdown">
      <div
        className={`filter-input dropdown-toggle ${error ? "error" : ""}`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="left-icon">{icon}</span>
        <input
          readOnly
          value={value}
          placeholder={placeholder}
        />
      </div>

      <ul className="dropdown-menu w-100 mt-2">
        {options.map((opt) => (
          <li key={opt}>
            <button
              type="button"
              className="dropdown-item"
              onClick={() => onSelect(opt)}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DateInput({ icon, value, onChange, error }) {
  return (
    <div className="filter-field">
      <div className={`filter-input ${error ? "error" : ""}`}>
        <span className="left-icon">{icon}</span>
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
