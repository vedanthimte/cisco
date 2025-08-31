import React from "react";
import TeamCard from "../components/TeamCard";
import facultyData from "../data/facultyData";
import "../styles/team.css";

const Team = () => {
  return (
    <section className="team-section">
      <h2>Faculty Members</h2>
      <div className="team-grid">
        {facultyData.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
