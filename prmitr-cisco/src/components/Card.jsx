import { motion } from 'framer-motion'
export default function Card({children, style}){
  return (
    <motion.div className="card" style={style}
      initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
      transition={{duration:.4}}>
      {children}
    </motion.div>
  )
}
