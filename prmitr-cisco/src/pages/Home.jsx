import Hero from '../components/Hero.jsx'
import Section from '../components/Section.jsx'
import EventCard from '../components/EventCard.jsx'
import BlogCard from '../components/BlogCard.jsx'
import CourseCard from '../components/CourseCard.jsx'
import { site } from '../data/site.js'
import { splitEvents } from '../data/events.js'
import { posts } from '../data/blog.js'
import { courses } from '../data/courses.js'
import FacultySection from "../components/FacultySection";


import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import { coreTeam } from "../data/teamData";
import "../styles/team.css";

export default function Home(){
  const { upcoming } = splitEvents()
  return (
    <>
      <Hero {...site.hero} />
      <div className="container">
        <div className="kpis">
          {site.kpis.map(k => (
            <div className="kpi" key={k.label}><strong>{k.value}</strong>{k.label}</div>
          ))}
        </div>
      </div>
      <section className="team-section">
      <SectionTitle title="Core Team" />
      <div className="team-grid">
        {coreTeam.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>
      </section>
      <FacultySection />
      <Section title="Upcoming Events" subtitle="Join our next sessions and hack nights.">
        <div className="grid">
          {upcoming.slice(0,3).map(e => <EventCard key={e.id} e={e} />)}
          {upcoming.length === 0 && <div className="mono">No upcoming events right now.</div>}
        </div>
      </Section>
      <Section title="Popular Courses" subtitle="Start free, upgrade anytime.">
        <div className="grid">
          {courses.free.slice(0,2).map(c => <CourseCard key={c.id} c={c} />)}
          {courses.paid.slice(0,1).map(c => <CourseCard key={c.id} c={c} />)}
        </div>
      </Section>
      <Section title="Latest from the Blog" subtitle="Tips, notes, and event recaps.">
        <div className="grid">
          {posts.slice(0,3).map(p => <BlogCard key={p.slug} post={p} />)}
        </div>
      </Section>
    </>
  )
}
