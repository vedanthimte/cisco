import Card from './Card.jsx'

export default function TeamCard({ p }) {
  const initials = p?.name ? p.name.split(' ').map(w => w[0]).slice(0,2).join('') : ''
  return (
    <Card>
      <div className="row" style={{gap:14, alignItems:'flex-start'}}>
        {/* image (public path) or fallback initials */}
        {p?.image ? (
          <img
            src={p.image}
            alt={p.name}
            style={{width:72, height:72, borderRadius:12, objectFit:'cover', flex:'0 0 auto'}}
          />
        ) : (
          <div style={{
            width:72, height:72, borderRadius:12,
            background:'linear-gradient(135deg,#0e2241,#16345e)',
            display:'grid', placeItems:'center', fontWeight:800, flex:'0 0 auto'
          }}>
            {initials}
          </div>
        )}

        <div style={{flex:1}}>
          <h3 style={{margin:'2px 0'}}>{p.name}</h3>
          <div className="mono">{p.role}</div>
          {p.bio && <p style={{marginTop:8, marginBottom:6}}>{p.bio}</p>}
          {p.email && <div className="mono" style={{marginTop:6}}>{p.email}</div>}
        </div>
      </div>
    </Card>
  )
}
