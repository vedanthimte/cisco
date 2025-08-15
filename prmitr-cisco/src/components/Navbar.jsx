import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { site } from '../data/site.js'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const links = [
    {to:'/', label:'Home', end:true},
    {to:'/events', label:'Events'},
    {to:'/team', label:'Team'},
    {to:'/courses', label:'Courses'},
    {to:'/gallery', label:'Gallery'},
    {to:'/blog', label:'Blog'},
    {to:'/about', label:'About'}
  ]
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={()=>setOpen(false)}>
          <img src="/logo.svg" alt="NetAcad logo" />
          <span>{site.shortName}</span>
        </Link>

        <button className="hamburger" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
          {open ? <FaTimes/> : <FaBars/>}
        </button>

        <div className={`menu ${open ? 'open' : ''}`}>
          {links.map(l=>(
            <NavLink key={l.to} to={l.to} end={l.end} onClick={()=>setOpen(false)}
                     className={({isActive})=>isActive?'active':''}>
              {l.label}
            </NavLink>
          ))}
          <a className="btn" href={`mailto:${site.email}`} onClick={()=>setOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
