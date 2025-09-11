import { useEffect } from "react";

export default function CountdownWidget() {
  useEffect(() => {
    // Dynamically inject the countdown script when the component mounts
    const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
    
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        backgroundColor: "#10192b", 
      }}
    >
      <a
        href="https://logwork.com/countdown-timer"
        className="countdown-timer"
        data-style="flip2"
        data-timezone="Asia/Kolkata"
        data-textcolor="#ffffff"
        data-date="2025-09-11 18:00"
        data-digitscolor="#ffffff"
        data-unitscolor="#ffffff"
        style={{
          fontSize: "5rem", 
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        Registration Starts
      </a>
    </div>
  );
}
