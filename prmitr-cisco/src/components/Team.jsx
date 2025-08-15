import React from "react";
import TeamCard from "../components/TeamCard";
import teamData from "../data/teamData";
import "../styles/team.css";

const Team = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
