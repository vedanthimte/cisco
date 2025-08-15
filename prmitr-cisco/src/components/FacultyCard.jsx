import React from "react";
import "../styles/faculty.css";

export default function FacultyCard({ name, role, image }) {
  return (
    <div className="faculty-card">
      <img src={image} alt={name} className="faculty-image" />
      <h3 className="faculty-name">{name}</h3>
      <p className="faculty-role">{role}</p>
    </div>
  );
}
