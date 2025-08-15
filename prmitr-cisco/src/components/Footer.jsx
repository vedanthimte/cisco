import { site } from '../data/site.js'
import { Link } from 'react-router-dom'
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6'

export default function Footer(){
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-col">
          <div className="footer-brand">
            <img src="/logo.svg" alt="NetAcad logo"/>
            <div>
              <strong>{site.shortName}</strong><br/>
              <span className="mono">{site.tagline}</span>
            </div>
          </div>
          <div className="mono" style={{marginTop:10}}>
            {site.location}<br/>{site.email} · {site.phone}
          </div>
          <div className="row" style={{marginTop:10}}>
            <a className="mono" href={site.socials.x}><FaXTwitter/></a>
            <a className="mono" href={site.socials.linkedin}><FaLinkedin/></a>
            <a className="mono" href={site.socials.github}><FaGithub/></a>
          </div>
        </div>
        <div className="footer-col footer-links">
          <strong>Explore</strong>
          <Link to="/events">Events</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="footer-col footer-links">
          <strong>About</strong>
          <Link to="/team">Team</Link>
          <Link to="/about">About</Link>
          <a href={`mailto:${site.email}`}>Contact</a>
        </div>
      </div>
      <div className="container mono" style={{marginTop:14}}>
        © {new Date().getFullYear()} {site.orgName}. Built with ❤️.
      </div>
    </footer>
  )
}
