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
    // <Section title="New Events Comming Soon!" subtitle="Stay Tuned ...">
    <Section title="CCNA 1 Workshop '25" subtitle="">
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
          {/* <iframe
            src="https://forms.gle/uHXabWiTsMTPzHxD6"
            frameBorder="0"
            style={{
              width: "100%",
              height: "1000px",
              border: "none",
              // marginTop: "-120px",
            }}
          /> */}

          <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex justify-center items-center p-6">
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700">
          Join our 8-day CCNA 1 Workshop
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 text-center">
          ✨ Not into coding? <span className="font-semibold">No worries!</span> 🚀 
          Step into the world of <strong>Networking & Cybersecurity</strong> — 
          start your journey with the <span className="text-indigo-600 font-semibold">CCNA 1 Workshop</span> 🔐🌐
        </p>

        <p className="text-lg text-gray-800 text-center">
          🚀 <strong>Master CCNA skills</strong> in our workshop 💡 Shine at the 
          <strong> Ideathon</strong> 🌟 Unlock offers worth 💰 
          <span className="font-bold text-green-600"> 12–18 LPA!</span>
        </p>

        {/* Workshop Details */}
        <div className="bg-indigo-50 rounded-xl p-5 shadow-inner">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3">📅 Workshop Details</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Dates:</strong> October 06 – 14, 2025</li>
            <li><strong>Time:</strong> 9:00 AM – 11:00 AM</li>
            <li><strong>Venue:</strong> CSE Department, PRMITR</li>
          </ul>
        </div>

        {/* Why Join */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3">💡 Why Should You Join?</h2>
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li>
              ✅ <strong>Complete CCNA-1 Training</strong> – Learn with real-time practice 
              using Cisco Packet Tracer and Command-Line Interface (CLI)
            </li>
            <li>
              ✅ <strong>Globally Recognized Certificate</strong> – Add value to your resume 
              with a verified CCNA-1 Certificate & Badges
            </li>
            <li>
              ✅ <strong>Practical Skills for Real Jobs</strong> – Learn to configure routers, 
              switches, and troubleshoot real-world networks
            </li>
          </ul>
        </div>

        {/* Seats Warning */}
        <p className="text-red-600 font-bold text-center text-lg">
          ⚠ Only 50 Seats Available – First Come, First Serve!
        </p>

        {/* Registration Info */}
        <div className="text-center">
          <p className="text-xl font-semibold text-orange-600">
            🔥 Registration Opens: 29 September 2025
          </p>
          <p className="text-gray-800 mt-2">
            Don’t miss this chance to <strong>learn, get certified!</strong>
          </p>
        </div>
      </div>
    </section>

        </div>
      )}
    </Section>
  );
}
