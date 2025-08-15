import React from "react";
import facultyData from "../data/facultyData";
import FacultyCard from "./FacultyCard";
import "../styles/faculty.css";

export default function FacultySection() {
  return (
    <section className="faculty-section">
      <div className="container">
        <h2>Our Faculty</h2>
        <div className="faculty-grid">
          {facultyData.map((faculty, index) => (
            <FacultyCard key={index} {...faculty} />
          ))}
        </div>
      </div>
    </section>
  );
}
