import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import Section from '../components/Section.jsx'
import Tabs from '../components/Tabs.jsx'
import EventCard from '../components/EventCard.jsx'
import { events } from '../data/events.js'

export default function Events() {
  const [params, setParams] = useSearchParams()
  const filter = params.get('filter') || 'upcoming'

  const setFilter = (value) => {
    setParams({ filter: value }, { replace: true })
  }

  // 🔥 CORE LOGIC (using your existing data)
  const { upcoming, ongoing, past } = useMemo(() => {
    const now = dayjs()

    const upcoming = []
    const ongoing = []
    const past = []

    events.forEach(event => {
      const [startTime, endTime] = event.time?.split("–") || []

      const start = dayjs(`${event.date} ${startTime || "00:00"}`)
      const end = endTime
        ? dayjs(`${event.date} ${endTime}`)
        : start.add(6, "hour")

      // ✅ ONLY manual LIVE
      const isOngoing =
        event.isOngoing === true || event.live === true

      if (isOngoing) {
        ongoing.push(event)
      } else if (now.isBefore(start)) {
        upcoming.push(event)
      } else if (now.isAfter(end)) {
        past.push(event)
      } else {
        upcoming.push(event)
      }
    })

    // sorting
    upcoming.sort((a, b) => a.date.localeCompare(b.date))
    ongoing.sort((a, b) => a.date.localeCompare(b.date))
    past.sort((a, b) => b.date.localeCompare(a.date))

    return { upcoming, ongoing, past }
  }, [])

  const tabs = [
    { label: 'Ongoing', value: 'ongoing' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Past', value: 'past' }
  ]

  const eventList =
    filter === 'ongoing'
      ? ongoing
      : filter === 'past'
      ? past
      : upcoming

  return (
    <Section
      title="Events"
      subtitle="Workshops, bootcamps, meetups."
    >
      <Tabs tabs={tabs} active={filter} onChange={setFilter} />

      <div className="grid gap-4 mt-4">
        {eventList.length > 0 ? (
          eventList.map(event => (
            <EventCard key={event.id} e={event} />
          ))
        ) : (
          <div className="mono text-center py-6">
            🚫 No events available
          </div>
        )}
      </div>
    </Section>
  )
}