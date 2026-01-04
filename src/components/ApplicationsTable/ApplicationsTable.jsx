import "./ApplicationsTable.css";
import {
  BsArrowsAngleExpand,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { useState } from "react";

const rows = [
  {
    ack: "22001/24-25",
    name: "Aditya Mehra",
    email: "aditya.mehra@gmail.com",
    university: "University of Manchester",
    program: "MSc Computer Science",
    pending: "2 Days | 14 Jan 2025",
  },
  {
    ack: "22002/24-25",
    name: "Kunal Verma",
    email: "kunal.verma@gmail.com",
    university: "University of Toronto",
    program: "MBA",
    pending: "5 Days | 11 Jan 2025",
  },
  {
    ack: "22003/24-25",
    name: "Pooja Sharma",
    email: "pooja.sharma@gmail.com",
    university: "University of Melbourne",
    program: "MS Data Analytics",
    pending: "1 Day | 15 Jan 2025",
  },
  {
    ack: "22004/24-25",
    name: "Rahul Iyer",
    email: "rahul.iyer@gmail.com",
    university: "National University of Singapore",
    program: "MSc Artificial Intelligence",
    pending: "7 Days | 09 Jan 2025",
  },
  {
    ack: "22005/24-25",
    name: "Sneha Kulkarni",
    email: "sneha.k@gmail.com",
    university: "University of British Columbia",
    program: "MS Software Engineering",
    pending: "3 Days | 13 Jan 2025",
  },
  {
    ack: "22006/24-25",
    name: "Arjun Malhotra",
    email: "arjun.malhotra@gmail.com",
    university: "Technical University of Munich",
    program: "MSc Robotics",
    pending: "4 Days | 12 Jan 2025",
  },
  {
    ack: "22007/24-25",
    name: "Neha Bansal",
    email: "neha.bansal@gmail.com",
    university: "University of Amsterdam",
    program: "MSc International Business",
    pending: "6 Days | 10 Jan 2025",
  },
  {
    ack: "22008/24-25",
    name: "Rohan Patel",
    email: "rohan.patel@gmail.com",
    university: "University of Sydney",
    program: "Master of Information Technology",
    pending: "8 Days | 08 Jan 2025",
  },
  {
    ack: "22009/24-25",
    name: "Aishwarya Nair",
    email: "aishwarya.nair@gmail.com",
    university: "Trinity College Dublin",
    program: "MSc Finance",
    pending: "2 Days | 14 Jan 2025",
  },
  {
    ack: "22010/24-25",
    name: "Siddharth Jain",
    email: "siddharth.jain@gmail.com",
    university: "University of California, Berkeley",
    program: "MS Electrical Engineering",
    pending: "9 Days | 07 Jan 2025",
  },
  {
    ack: "22011/24-25",
    name: "Ananya Chatterjee",
    email: "ananya.c@gmail.com",
    university: "London School of Economics",
    program: "MSc Economics",
    pending: "1 Day | 15 Jan 2025",
  },
  {
    ack: "22012/24-25",
    name: "Mohit Aggarwal",
    email: "mohit.aggarwal@gmail.com",
    university: "University of Waterloo",
    program: "MS Computer Engineering",
    pending: "5 Days | 11 Jan 2025",
  },
  {
    ack: "22013/24-25",
    name: "Kriti Saxena",
    email: "kriti.saxena@gmail.com",
    university: "University of Edinburgh",
    program: "MSc Data Science",
    pending: "3 Days | 13 Jan 2025",
  },
  {
    ack: "22014/24-25",
    name: "Varun Khanna",
    email: "varun.khanna@gmail.com",
    university: "Monash University",
    program: "Master of Cyber Security",
    pending: "6 Days | 10 Jan 2025",
  },
  {
    ack: "22015/24-25",
    name: "Ishita Roy",
    email: "ishita.roy@gmail.com",
    university: "ETH Zurich",
    program: "MSc Data Engineering",
    pending: "4 Days | 12 Jan 2025",
  },
];

const ROWS_PER_PAGE = 5;

export default function ApplicationsTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rows.length / ROWS_PER_PAGE);

  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentRows = rows.slice(startIndex, startIndex + ROWS_PER_PAGE);

  return (
    <div className="applications-card">
      <div className="applications-header">
        <h6>Applications</h6>
        <BsArrowsAngleExpand />
      </div>

      <div className="applications-tabs">
        <span className="active">Pending On Me (15)</span>
        <span>Lorem Ipsum (12)</span>
        <span>Lorem Ipsum (18)</span>
      </div>

      <div className="applications-table">
        <div className="table-head">
          <span>Ack no.</span>
          <span>Student name</span>
          <span>University</span>
          <span>Program</span>
          <span>Pending Since</span>
        </div>

        {currentRows.map((row, index) => (
          <div className="table-row" key={index}>
            <span className="link text-decoration-underline">{row.ack}</span>

            <span>
              <strong>{row.name}</strong>
              <small>{row.email}</small>
            </span>

            <span>{row.university}</span>

            <span>
              {row.program.split(" ")[0]}
              <br />
              <small>{row.program}</small>
            </span>

            <span>
              <strong>{row.pending.split("|")[0]}</strong>
              <small>{row.pending.split("|")[1]}</small>
            </span>
          </div>
        ))}
      </div>

      <div className="applications-pagination">
        <BsChevronLeft
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((p) => p - 1);
            }
          }}
        />

        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`page ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </span>
        ))}

        <BsChevronRight
          className={`next ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage((p) => p + 1);
            }
          }}
        />
      </div>
    </div>
  );
}
