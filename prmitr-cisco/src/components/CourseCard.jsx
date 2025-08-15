import Card from './Card.jsx'
export default function CourseCard({c}){
  return (
    <Card>
      <div className="row" style={{justifyContent:'space-between'}}>
        <h3 style={{margin:0}}>{c.title}</h3>
        <span className="tag">{c.level}</span>
      </div>
      <div className="mono">{c.hours} hours {c.price ? '· ' + c.price : ''}</div>
      <p>{c.description}</p>
      <div className="row">
        {c.skills?.map(s => <span className="tag" key={s}>{s}</span>)}
      </div>
      {c.link && <a className="btn" style={{marginTop:10}} href={c.link}>Enroll</a>}
    </Card>
  )
}
