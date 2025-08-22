import React from "react";
import { facultyData, coreTeam } from "../data/facultyData";
import FacultyCard from "./FacultyCard";
import "../styles/faculty.css";

function FacultyGroup({ title, data }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="faculty-grid">
        {data.map((faculty, index) => (
          <FacultyCard key={index} {...faculty} />
        ))}
      </div>
    </div>
  );
}

export default function FacultySection() {
  return (
    <section className="faculty-section">
      <FacultyGroup title="Core Team" data={coreTeam} />
      <FacultyGroup title="Pillars of Strength" data={facultyData} />
    </section>
  );
}
