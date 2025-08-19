import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function TeamCard({ name, role, bio, image, links }) {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-image" />
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      {/* <p className="team-bio">{bio}</p> */}
      <div className="team-links">
        {links?.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        )}
        {links?.github && (
          <a href={links.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        )}
        {links?.insta && (
          <a href={links.insta} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
}
