// import Section from '../components/Section.jsx';
// import Count from "../components/Count.jsx";

// export default function About() {
//   return (
    
//     <Section title="Cyber Security Workshop" subtitle="">
//       <Count />
      
//       <div
//         style={{
//           width: "100%",
//           height: "850px",        // Height of visible area
//           overflow: "hidden",     // Hide overflowing content
//           border: "none"
//         }}
//       >
//         <iframe
//           src=""
//           frameBorder="0"
//           style={{
//             width: "100%",
//             height: "1000px",     // Height including content you'd like to crop
//             border: "none",
//             marginTop: "-120px"   // Shift content up to cut off the header
//           }}
//         />
//       </div>
//     </Section>
//   );
// }

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
    <Section title="Cyber Security Workshop" subtitle="">
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
            src="https://payments.cashfree.com/forms?code=prmitr-cisco-cyber"
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
