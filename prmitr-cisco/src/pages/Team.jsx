import Section from '../components/Section.jsx'
import TeamCard from '../components/TeamCard.jsx'
import { team } from '../data/team.js'

function Group({title, people}){
  return (
    <>
      <h3 style={{marginTop:10}}>{title}</h3>
      <div className="team-grid">
        {people.map(p => <TeamCard key={p.id} p={p} />)}
      </div>
    </>
  )
}

export default function Team(){
  return (
    <Section title="Our Team" subtitle="Core, Leads, and Members who make it happen.">
      <Group title="Core" people={team.core} />
      <Group title="Leads" people={team.lead} />
      <Group title="Members" people={team.member} />
    </Section>
  )
}
