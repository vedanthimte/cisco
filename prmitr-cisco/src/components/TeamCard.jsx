import Card from './Card.jsx'
export default function TeamCard({p}){
  const initials = p.name.split(' ').map(w=>w[0]).slice(0,2).join('')
  return (
    <Card>
      <div className="row" style={{gap:14}}>
        <div style={{width:54,height:54,borderRadius:12,background:'linear-gradient(135deg,#0e2241,#16345e)',display:'grid',placeItems:'center',fontWeight:800}}>
          {p.avatar ? <img alt={p.name} src={p.avatar} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:12}}/> : initials}
        </div>
        <div>
          <h3 style={{margin:'2px 0'}}>{p.name}</h3>
          <div className="mono">{p.role}</div>
          {p.email && <div className="mono">{p.email}</div>}
        </div>
      </div>
    </Card>
  )
}
