import dayjs from "dayjs"
import Card from './Card.jsx'

export default function EventCard({ e }) {
  const now = dayjs()

  const [startTime, endTime] = e.time?.split("–") || []

  const start = dayjs(`${e.date} ${startTime || "00:00"}`)
  const end = endTime
    ? dayjs(`${e.date} ${endTime}`)
    : start.add(6, "hour")

  // 🔥 ONLY manual LIVE
  const isOngoing =
    e.isOngoing === true || e.live === true

  const isUpcoming = !isOngoing && now.isBefore(start)

  return (
    <Card>
      {/* Header */}
      <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>{e.title}</h3>

        {/* 🔥 STATUS BADGE (ONLY 2) */}
        {isOngoing ? (
          <span className="badge live">LIVE</span>
        ) : isUpcoming ? (
          <span className="badge upcoming">UPCOMING</span>
        ) : null}
      </div>

      {/* Mode */}
      <h3 className="tag">{e.mode}</h3>

      {/* Date & Time */}
      <div className="mono">{e.date} · {e.time}</div>
      <div className="mono">{e.location}</div>

      {/* Description */}
      <p>{e.description}</p>

      {/* Tags */}
      <div className="row">
        {e.tags?.map(t => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>

      {/* Button */}
      {e.link && (
        <a className="btn" style={{ marginTop: 10 }} href={e.link}>
          Details
        </a>
      )}
    </Card>
  )
}