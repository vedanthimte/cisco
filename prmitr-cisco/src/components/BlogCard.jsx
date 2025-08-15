import { Link } from 'react-router-dom'
import Card from './Card.jsx'
export default function BlogCard({post}){
  return (
    <Card>
      <h3 style={{margin:'6px 0'}}><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
      <div className="mono">{post.date} · {post.author}</div>
      <p>{post.excerpt}</p>
      <Link className="btn ghost" to={`/blog/${post.slug}`}>Read</Link>
    </Card>
  )
}
