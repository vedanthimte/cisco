import { useState, useEffect } from "react";
import Section from '../components/Section.jsx';
import Count from "../components/Count.jsx";

export default function About() {
  const [isLive, setIsLive] = useState(false);

  // 🎯 Target date: 3 September 2025, 10:00 AM IST
  const targetDate = new Date("2025-09-03T10:00:00+05:30"); 

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      if (now >= targetDate) {
        setIsLive(true);
      }
    };

    checkTime(); // run on mount
    const timer = setInterval(checkTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Section title="Introduction To AI " subtitle="Free AI Masterclass - ONLY FOR FIRST YEAR  ">
      {!isLive ? (
        <Count targetDate={targetDate} /> 
        // ⬆️ Pass the same date to countdown (if Count supports props)
      ) : (
        <div
          style={{
            width: "100%",
            height: "850px",
            overflow: "hidden",
            border: "none",
          }}
        >
          <iframe
            src="https://forms.gle/h72tYrueDJkVGrhA8"
            frameBorder="0"
            style={{
              width: "100%",
              height: "1000px",
              border: "none",
              // marginTop: "-120px",
            }}
          />
        </div>
      )}
    </Section>
  );
}
