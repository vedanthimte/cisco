import { useSearchParams } from 'react-router-dom'
import Section from '../components/Section.jsx'
import Tabs from '../components/Tabs.jsx'
import EventCard from '../components/EventCard.jsx'
import { splitEvents } from '../data/events.js'

export default function Events(){
  const { upcoming, past } = splitEvents()
  const [params,setParams] = useSearchParams()
  const filter = params.get('filter') || 'upcoming'
  const setFilter = (v)=>{ params.set('filter', v); setParams(params, {replace:true}) }
  const tabs = [{label:'Upcoming',value:'upcoming'},{label:'Past',value:'past'}]
  const list = filter==='past' ? past : upcoming
  return (
    <Section title="Events" subtitle="Workshops, bootcamps, meetups.">
      <Tabs tabs={tabs} active={filter} onChange={setFilter}/>
      <div className="grid">
        {list.map(e => <EventCard key={e.id} e={e} />)}
        {list.length===0 && <div className="mono">Nothing here yet.</div>}
      </div>
    </Section>
  )
}
