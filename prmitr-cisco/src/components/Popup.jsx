import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/popup.css";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check sessionStorage to show popup only once per session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleView = () => {
    setShowPopup(false);
    navigate("/events");
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={handleClose}>
          ✖
        </button>
        <h2>Orientation Program</h2>
        <p>
          For new students: Join us on <strong>15th and 16th September</strong> to learn about the
          Cisco Networking Academy and explore the latest trends in tech.
        </p>

        <button className="popup-action" onClick={handleView}>
          View
        </button>
      </div>
    </div>
  );
}
