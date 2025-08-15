import Section from '../components/Section.jsx'
import BlogCard from '../components/BlogCard.jsx'
import { posts } from '../data/blog.js'

export default function Blog(){
  return (
    <Section title="Blog" subtitle="Guides, notes, and recaps.">
      <div className="grid">
        {posts.map(p => <BlogCard key={p.slug} post={p} />)}
      </div>
    </Section>
  )
}
