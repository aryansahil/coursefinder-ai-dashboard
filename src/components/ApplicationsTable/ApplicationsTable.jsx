import "./ApplicationsTable.css";
import { BsArrowsAngleExpand, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const rows = [
  {
    ack: "11710/22-23",
    name: "Rishi Joshi",
    email: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc\nInternational...",
    pending: "1 Day\n12 Dec 2022",
  },
  {
    ack: "11710/22-23",
    name: "Viren Shah",
    email: "virensha24@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc\nInternational...",
    pending: "1 Day\n12 Dec 2022",
  },
  {
    ack: "11710/22-23",
    name: "Rishi Joshi",
    email: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc\nInternational...",
    pending: "1 Day\n12 Dec 2022",
  },
  {
    ack: "11710/22-23",
    name: "Tushar Joshi",
    email: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc\nInternational...",
    pending: "1 Day\n12 Dec 2022",
  },
  {
    ack: "11710/22-23",
    name: "Tushar Joshi",
    email: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc\nInternational...",
    pending: "1 Day\n12 Dec 2022",
  },
];

export default function ApplicationsTable() {
  return (
    <div className="applications-card">
      {/* HEADER */}
      <div className="applications-header">
        <h6>Applications</h6>
        <BsArrowsAngleExpand />
      </div>

      {/* TABS */}
      <div className="applications-tabs">
        <span className="active">Pending On Me (15)</span>
        <span>Lorem Ipsum (12)</span>
        <span>Lorem Ipsum (18)</span>
      </div>

      {/* TABLE */}
      <div className="applications-table">
        <div className="table-head">
          <span>Ack no.</span>
          <span>Student name</span>
          <span>University</span>
          <span>Program</span>
          <span>Pending Since</span>
        </div>

        {rows.map((row, index) => (
          <div className="table-row" key={index}>
            <span className="link text-decoration-underline">{row.ack}</span>

            <span>
              <strong>{row.name}</strong>
              <small>{row.email}</small>
            </span>

            <span>{row.university}</span>

            <span>
              Msc<br />
              <small>International...</small>
            </span>

            <span>
              <strong>1 Day</strong>
              <small>12 Dec 2022</small>
            </span>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="applications-pagination">
        <BsChevronLeft />
        <span className="page active">1</span>
        <span className="page">2</span>
        <span className="page">3</span>
        <BsChevronRight className="next" />
      </div>
    </div>
  );
}
