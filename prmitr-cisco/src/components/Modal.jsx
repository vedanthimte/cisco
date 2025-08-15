import { motion } from 'framer-motion'
export default function Modal({open, onClose, children}){
  if(!open) return null
  return (
    <div role="dialog" aria-modal="true" onClick={onClose}
      style={{
        position:'fixed', inset:0, background:'rgba(0,0,0,.6)',
        display:'grid', placeItems:'center', zIndex:1000
      }}>
      <motion.div className="panel" onClick={e=>e.stopPropagation()}
        initial={{opacity:0, scale:.96}} animate={{opacity:1, scale:1}} transition={{duration:.2}}
        style={{maxWidth:'90vw', maxHeight:'90vh', overflow:'auto'}}>
        <button className="btn ghost" style={{float:'right'}} onClick={onClose} aria-label="Close">Close</button>
        <div style={{clear:'both'}}/>
        {children}
      </motion.div>
    </div>
  )
}
