import Section from '../components/Section.jsx'

export default function About() {
  return (
    <Section title="Cyber Security Workshop" subtitle="">
      <iframe
        src="https://payments.cashfree.com/forms?code=prmitr-cisco-cyber"
        frameBorder="0"
        style={{
          width: "100%",
          height: "1000px",
          border: "none",
          // clipPath: "inset(6% 0 0 0)" // crop 150px from top
        }}
      />

    </Section>
  )
}
