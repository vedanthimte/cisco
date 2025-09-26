import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { site } from '../data/site.js'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const links = [
    {to:'/', label:'Home', end:true},
    // {to:'/about', label:'About'},
    {to:'/events', label:'Events'},
    {to:'/team', label:'Team'},
    {to:'/faculty', label:'Faculty'},
    // {to:'/contest', label:'Contest'},
    {to:'/courses', label:'Courses'},
    {to:'/gallery', label:'Gallery'},
    {to:'/blog', label:'Blog'},
    {to:'/register', label:'  Register'},
    {to:'/contest', label:'  Contest'},
    
    
  ]
  return (

    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={()=>setOpen(false)}>
          <img src="/assets/cisco_logo.jpg" alt="logo" />
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
          <a className="btn" href="https://verify.prmitr.in" target="_blank" style={{backgroundColor:'#225ee0e7'}} onClick={()=>setOpen(false)}>Verify</a>
        </div>
      </div>
    </nav>
  )
}
