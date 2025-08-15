import { motion } from 'framer-motion'

export default function Section({title,subtitle,children,actions}){
  return (
    <section className="section">
      <div className="container">
        <div className="row" style={{justifyContent:'space-between', alignItems:'flex-end'}}>
          <div>
            <h2>{title}</h2>
            {subtitle && <div className="mono">{subtitle}</div>}
          </div>
          <div>{actions}</div>
        </div>
        <motion.div style={{marginTop:16}}
          initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-100px'}}
          transition={{duration:.5}}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
