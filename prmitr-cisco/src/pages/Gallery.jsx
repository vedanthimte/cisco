import { useState } from 'react'
import Section from '../components/Section.jsx'
import GalleryCard from '../components/GalleryCard.jsx'
import Modal from '../components/Modal.jsx'
import { gallery } from '../data/gallery.js'

export default function Gallery(){
  const [active,setActive] = useState(null)
  return (
    <Section title="Work Gallery" subtitle="Labs, events, and projects. Click any image to enlarge.">
      <div className="grid">
        {gallery.map(item => <GalleryCard key={item.id} item={item} onOpen={setActive} />)}
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
// src/data/gallery.js
export const gallery = [
  {
    id: 1,
    title: "Event 1",
    description: " college event photo.",
    image: "/assets/gallery/event1.jpg",
    tags: ["Event"]
  },
  {
    id: 2,
    title: "Event 2",
    description: "college event photo.",
    image: "/assets/gallery/event2.jpg",
    tags: ["Event"]
  },
  {
    id: 3,
    title: "Event 3",
    description: "college event photo.",
    image: "/assets/gallery/event3.jpg",
    tags: ["Event"]
  },
  {
    id: 4,
    title: "Event 4",
    description: "college event photo.",
    image: "/assets/gallery/event4.jpg",
    tags: ["Event"]
  },
  {
    id: 5,
    title: "Event 5",
    description: "college event photo.",
    image: "/assets/gallery/event5.jpg",
    tags: ["Event"]
  },
  {
    id: 6,
    title: "Gallery Image 1",
    description: "photo 1.",
    image: "/assets/gallery/img1.jpg",
    tags: ["Gallery"]
  },
  {
    id: 7,
    title: "Gallery Image 2",
    description: "photo 2.",
    image: "/assets/gallery/img2.jpg",
    tags: ["Gallery"]
  },
  {
    id: 8,
    title: "Gallery Image 3",
    description: "photo 3.",
    image: "/assets/gallery/img3.jpg",
    tags: ["Gallery"]
  },
  {
    id: 9,
    title: "Gallery Image 4",
    description: "photo 4.",
    image: "/assets/gallery/img4.jpg",
    tags: ["Gallery"]
  },
  {
    id: 10,
    title: "Gallery Image 5",
    description: "photo 5.",
    image: "/assets/gallery/img5.jpg",
    tags: ["Gallery"]
  },
  {
    id: 11,
    title: "Gallery Image 6",
    description: "photo 6.",
    image: "/assets/gallery/img6.jpg",
    tags: ["Gallery"]
  },
  {
  
    id: 12,
    title: "Event 6",
    description: "college event photo.",
    image: "/assets/gallery/event6.jpg",
    tags: ["Event"]
  },
  {
    id:13,
    title: "team",
    description: "team photo.",
    image: "/assets/gallery/team.jpg",
    tags: ["team"]
  }
];
