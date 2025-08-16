import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <div className="container section">
      <h1>Page not found !</h1>
      <p>If any problem or error contact admin - Vedant Himte [ +91 72489 07856 ]</p>
      <Link className="btn" to="/">Go Home</Link>
    </div>
  )
}
