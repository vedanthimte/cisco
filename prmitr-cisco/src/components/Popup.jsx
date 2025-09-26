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
    navigate("/register");
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={handleClose}>
          ✖
        </button>
        <h2>Exclusive Workshop !</h2>
        <p>
          <strong><h3>From Cables to Cloud </h3></strong>Join CCNA-1 Workshop, Build the skills that power tech! 
        </p>

        <button className="popup-action" onClick={handleView}>
          View
        </button>
      </div>
    </div>
  );
}
