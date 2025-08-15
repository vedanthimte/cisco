import { useState } from 'react'
import Section from '../components/Section.jsx'
import Tabs from '../components/Tabs.jsx'
import CourseCard from '../components/CourseCard.jsx'
import { courses } from '../data/courses.js'

export default function Courses(){
  const [tab,setTab] = useState('free')
  const tabs = [{label:'Free', value:'free'}, {label:'Paid', value:'paid'}]
  const list = tab==='free' ? courses.free : courses.paid
  return (
    <Section title="Courses" subtitle="Self-paced and instructor-led programs.">
      <Tabs tabs={tabs} active={tab} onChange={setTab}/>
      <div className="grid">
        {list.map(c => <CourseCard key={c.id} c={c} />)}
      </div>
    </Section>
  )
}
