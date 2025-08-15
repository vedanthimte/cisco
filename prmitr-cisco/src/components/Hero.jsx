import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero({title,subtitle,ctaPrimary,ctaSecondary, right}){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div className="panel"
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.5}}>
          <h1 style={{marginTop:0, fontSize:36, lineHeight:1.2}}>{title}</h1>
          <p style={{color:'var(--muted)'}}>{subtitle}</p>
          <div className="row" style={{marginTop:12}}>
            {ctaPrimary && <Link className="btn" to={ctaPrimary.href}>{ctaPrimary.label}</Link>}
            {ctaSecondary && <Link className="btn ghost" to={ctaSecondary.href}>{ctaSecondary.label}</Link>}
          </div>
        </motion.div>
        <motion.div className="panel"
          initial={{opacity:0, scale:.98}} animate={{opacity:1, scale:1}} transition={{duration:.6, delay:.1}}>
          {right || <img alt="Network illustration" src="https://dummyimage.com/800x500/0a1530/00bceb&text=Cisco+Lab" style={{width:'100%',borderRadius:12}}/>}
        </motion.div>
      </div>
    </section>
  )
}
