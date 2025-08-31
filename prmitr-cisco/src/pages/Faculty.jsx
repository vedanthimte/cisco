import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import { facultyData } from "../data/facultyData";
import "../styles/team.css";

export default function Team() {
  return (
    <section className="team-section">
      <SectionTitle title="Faculty Members" />
      <div className="team-grid">
        {facultyData.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>
    </section>
  );
}
