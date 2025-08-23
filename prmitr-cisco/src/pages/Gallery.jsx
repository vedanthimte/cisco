import { useState } from 'react'
import Section from '../components/Section.jsx'
import GalleryCard from '../components/GalleryCard.jsx'
import Modal from '../components/Modal.jsx'
import { galleryData } from '../data/gallery.js'

export default function Gallery(){
  const [active,setActive] = useState(null)
  return (
    <Section title="Work Gallery" subtitle="Labs, events, and projects. Click any image to enlarge.">
      <div className="grid">
        {galleryData.map(item => <GalleryCard key={item.id} item={item} onOpen={setActive} />)}
      </div>

      <Modal open={!!active} onClose={()=>setActive(null)}>
        {active && (
          <div>
            <img src={active.image} alt={active.title} style={{width:'100%', borderRadius:12}}/>
            <h2 style={{margin:'10px 0 6px'}}>{active.title}</h2>
            <p style={{marginTop:0}}>{active.description}</p>
            <div className="row">
              {active.tags?.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}

