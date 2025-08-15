import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import { coreTeam, teamLeads, teamMembers } from "../data/teamData";
import "../styles/team.css";

export default function Team() {
  return (
    <section className="team-section">
      <SectionTitle title="Core Team" />
      <div className="team-grid">
        {coreTeam.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>

      <SectionTitle title="Team Leads" />
      <div className="team-grid">
        {teamLeads.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>

      <SectionTitle title="Team Members" />
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>
    </section>
  );
}
