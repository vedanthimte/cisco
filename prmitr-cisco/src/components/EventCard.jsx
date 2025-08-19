import Card from './Card.jsx'
export default function EventCard({e}){
  return (
    <Card>
      <div className="row" style={{justifyContent:'space-between'}}>
        <h3 style={{margin:0}}>{e.title}</h3>
      </div>
      <h3 className="tag">{e.mode}</h3>
      
      <div className="mono">{e.date} . {e.time}</div>
      <div className="mono">{e.location}</div>
      <p>{e.description}</p>
      <div className="row">
        {e.tags?.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>
      {e.link && <a className="btn" style={{marginTop:10}} href={e.link}>Details</a>}
    </Card>
  )
}
