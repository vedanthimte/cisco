import Section from '../components/Section.jsx'
import { site } from '../data/site.js'

export default function About(){
  return (
    <Section title="About the Academy" subtitle={site.tagline}>
      <div className="panel">
        <p>{site.about}</p>
        <h3>What we do</h3>
        <ul>
          <li>Certification study groups (CCNA, CyberOps, DevNet)</li>
          <li>Hands-on labs with routers/switches & Packet Tracer</li>
          <li>Career support: resume reviews, mock interviews</li>
          <li>Community: weekly standups and peer mentoring</li>
        </ul>
        <h3>Get involved</h3>
        <p>Join our mailing list by emailing <a href={`mailto:${site.email}`}>{site.email}</a>. New members welcome!</p>
      </div>
    </Section>
  )
}
