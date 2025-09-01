import Section from '../components/Section.jsx';
import Count from "../components/Count.jsx";

export default function About() {
  return (
    
    <Section title="Cyber Security Workshop" subtitle="">
      <Count />
      
      <div
        style={{
          width: "100%",
          height: "850px",        // Height of visible area
          overflow: "hidden",     // Hide overflowing content
          border: "none"
        }}
      >
        <iframe
          src=""
          frameBorder="0"
          style={{
            width: "100%",
            height: "1000px",     // Height including content you'd like to crop
            border: "none",
            marginTop: "-120px"   // Shift content up to cut off the header
          }}
        />
      </div>
    </Section>
  );
}
