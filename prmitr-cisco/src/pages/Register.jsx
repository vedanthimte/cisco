import { useState, useEffect } from "react";
import Section from '../components/Section.jsx';
import Count from "../components/Count.jsx";

export default function About() {
  const [isLive, setIsLive] = useState(false);

  // 🎯 Target date: ex 23 September 2025, 10:00 AM IST
  const targetDate = new Date("2025-09-01T10:00:00+05:30");

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
    <Section title="New Events Comming Soon!" subtitle="Stay Tuned ...">
    </Section>
  );
}
