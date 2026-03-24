import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import Section from '../components/Section.jsx'
import Tabs from '../components/Tabs.jsx'
import EventCard from '../components/EventCard.jsx'
import { events } from '../data/events.js'

export default function Events() {
  const [params, setParams] = useSearchParams()

  // 🔥 default = ALL
  const filter = params.get('filter') || 'all'

  const setFilter = (value) => {
    setParams({ filter: value }, { replace: true })
  }

  const { all, upcoming, ongoing, past } = useMemo(() => {
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

      const isOngoing =
        event.isOngoing === true || event.live === true

      if (isOngoing) {
        ongoing.push(event)
      }

      if (now.isBefore(start)) {
        upcoming.push(event)
      }

      if (now.isAfter(end)) {
        past.push(event)
      }
    })

    // 🔥 ALL events sorted by date (latest first or change if needed)
    const all = [...events].sort((a, b) =>
      b.date.localeCompare(a.date)
    )

    return { all, upcoming, ongoing, past }
  }, [])

  const tabs = [
    { label: 'All', value: 'all' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Ongoing', value: 'ongoing' },
    { label: 'Past', value: 'past' }
  ]

  const eventList =
    filter === 'upcoming'
      ? upcoming
      : filter === 'ongoing'
      ? ongoing
      : filter === 'past'
      ? past
      : all

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
            No events available
          </div>
        )}
      </div>
    </Section>
  )
}