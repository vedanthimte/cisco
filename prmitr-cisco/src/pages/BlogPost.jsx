import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/blog.js'
import { marked } from 'marked'

export default function BlogPost(){
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if(!post) return <div className="container section">Post not found.</div>
  return (
    <section className="section">
      <div className="container post">
        <Link className="mono" to="/blog">← Back to Blog</Link>
        <h1 style={{marginBottom:0}}>{post.title}</h1>
        <div className="mono">{post.date} · {post.author}</div>
        <div dangerouslySetInnerHTML={{__html: marked.parse(post.markdown)}} />
      </div>
    </section>
  )
}
