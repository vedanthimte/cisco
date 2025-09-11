import { useState, useEffect } from "react";
import Section from '../components/Section.jsx';
import Count from "../components/Count.jsx";

export default function About() {
  const [isLive, setIsLive] = useState(false);

  const targetDate = new Date("2025-09-11T18:00:00+05:30");

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
    <Section title="DSA CONTEST REGISTRATIION" subtitle="Download guideline and instruction for DSA contest ! ">
      <div >
          <a
            href="/PRMITR_Coding_Contest_Guidelines.pdf"
            download
            style={{
              display: "inline-block",
              padding: "10px 20px",
              margin: "10px 5px",
              backgroundColor: "#2563eb", // blue
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
          >
            📄 Download Contest Guidelines
          </a>
          </div>
      
      {!isLive ? (
          <Count targetDate={targetDate} />
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
            src="https://payments.cashfree.com/forms?code=dsa-contest"
            frameBorder="0"
            style={{
              width: "100%",
              height: "1000px",
              border: "none",
              // marginTop: "-120px",
            }}
          />
        </div>
      )
      }
    </Section >
  );
}
