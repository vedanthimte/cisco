import React from "react";
import "../styles/profileCard.css";

export default function ProfileCard({ name, role, image }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h3 className="profile-name">{name}</h3>
      <p className="profile-role">{role}</p>
    </div>
  );
}
