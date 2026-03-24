import Hero from '../components/Hero.jsx'
import Section from '../components/Section.jsx'
import EventCard from '../components/EventCard.jsx'
import BlogCard from '../components/BlogCard.jsx'
import CourseCard from '../components/CourseCard.jsx'
import { site } from '../data/site.js'
import { splitEvents, events } from '../data/events.js'
import { posts } from '../data/blog.js'
import { courses } from '../data/courses.js'
import FacultySection from "../components/FacultySection"
import Popup from "../components/Popup.jsx"
import About from "../pages/About.jsx"
import "../styles/team.css"

export default function Home() {

  // ✅ Get split data
  const eventsData = splitEvents() || {}
  const upcoming = eventsData.upcoming || []

  // 🔥 Force LIVE events (safe fallback)
  const ongoing = events.filter(
    e => e.live === true || e.isOngoing === true
  )

  // 🔥 Combine (LIVE first)
  const allEvents = [...ongoing, ...upcoming]

  return (
    <>
      <Hero {...site.hero} />
      <Popup />

      <div className="container">
        <div className="kpis">
          {site.kpis?.map((k, i) => (
            <div className="kpi" key={i}>
              <strong>{k.value}</strong>{k.label}
            </div>
          ))}
        </div>
      </div>

      <FacultySection />

      {/* 🔥 EVENTS SECTION */}
      <Section title="Upcoming Events" subtitle="Join our next sessions and hack nights.">
        <div className="grid">

          {allEvents.length > 0 ? (
            allEvents.slice(0, 3).map((e, i) => (
              <EventCard key={e.id || i} e={e} />
            ))
          ) : (
            <div className="mono">No events right now.</div>
          )}

        </div>
      </Section>

      {/* 🔥 COURSES */}
      <Section title="Popular Courses" subtitle="Start free, upgrade anytime.">
        <div className="grid">
          {courses?.free?.slice(0, 2).map((c, i) => (
            <CourseCard key={c.id || i} c={c} />
          ))}
          {courses?.paid?.slice(0, 1).map((c, i) => (
            <CourseCard key={c.id || i} c={c} />
          ))}
        </div>
      </Section>

      <About />

      {/* 🔥 BLOG */}
      <Section title="Latest from the Blog" subtitle="Tips, notes, and event recaps.">
        <div className="grid">
          {posts?.slice(0, 3).map((p, i) => (
            <BlogCard key={p.slug || i} post={p} />
          ))}
        </div>
      </Section>
    </>
  )
}