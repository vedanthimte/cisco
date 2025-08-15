import Card from './Card.jsx'
export default function GalleryCard({ item, onOpen }){
  return (
    <Card>
      <div style={{marginBottom:10, cursor:'zoom-in'}} onClick={()=>onOpen(item)}>
        <img
          src={item.image}
          alt={item.title}
          style={{width:'100%', borderRadius: 10, objectFit:'cover'}}
        />
      </div>
      <h3 style={{margin:'6px 0'}}>{item.title}</h3>
      <p>{item.description}</p>
      <div className="row">
        {item.tags?.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </Card>
  )
}
