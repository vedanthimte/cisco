import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <div className="container section">
      <h1>404</h1>
      <p>That page isn’t here.</p>
      <Link className="btn" to="/">Go Home</Link>
    </div>
  )
}
