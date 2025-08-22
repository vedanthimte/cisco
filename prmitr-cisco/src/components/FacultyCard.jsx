// import React from "react";
import "../styles/faculty.css";

// export default function FacultyCard({ name, role, image }) {
//   return (
//     <div className="faculty-card">
//       <img src={image} alt={name} className="faculty-image" />
//       <h3 className="faculty-name">{name}</h3>
//       <p className="faculty-role">{role}</p>
//     </div>
//   );
// }

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function FacultyCard({ name, role, bio, image, links }) {
  return (
    <div className="faculty-card">
      <img src={image} alt={name} className="faculty-image" />
      <h3 className="faculty-name">{name}</h3>
      <p className="faculty-role">{role}</p>
      
      {bio && <p className="faculty-bio">{bio}</p>}
      
      <div className="faculty-links">
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
