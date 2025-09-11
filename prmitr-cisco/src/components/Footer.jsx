import { site } from '../data/site.js'
import { Link } from 'react-router-dom'
import { FaInstagram , FaLinkedin  } from 'react-icons/fa6'

export default function Footer(){
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-col">
          <div className="footer-brand">
            <img src="/assets/cisco_logo.jpg" alt="Logo"/>
            <div>
              <strong>{site.shortName}</strong><br/>
              <span className="mono">{site.tagline}</span>
            </div>
          </div>
          <div className="mono" style={{marginTop:10}}>
            {site.location}<br/>{site.email} · {site.phone}
          </div>
          <div className="row" style={{marginTop:10}}>
            <a className="mono" href={site.socials.insta}><FaInstagram  /></a>
            <a className="mono" href={site.socials.linkedin}><FaLinkedin/></a>
          </div>
        </div>
        <div className="footer-col footer-links">
          <strong>Explore</strong>
          <Link to="/events">Events</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="footer-col footer-links">
          <strong>About</strong>
          <Link to="/team">Team</Link>
          <Link to="/about">About</Link>
          <a href={`mailto:${site.email}`}>Contact</a>
        </div>
      </div>
      <div className="container mono" style={{marginTop:14, textAlign:'center'}}>
        © {new Date().getFullYear()} PRMITR CISCO | All Rights Reserved 
      </div>
      <div className="container mono" style={{marginTop:14, textAlign:'center'}}>
        Credits: Site created and managed by Vedant Himte
      </div>
    </footer>
  )
}
