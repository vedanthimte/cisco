import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect } from "react";
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Team from './pages/Team.jsx'
import Faculty from './pages/Faculty.jsx'
import Courses from './pages/Courses.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'
import Register from './pages/Register.jsx'
import Contest from './pages/Contest.jsx'

import NotFound from './pages/NotFound.jsx'

function PacketTracerRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href =
        "https://www.netacad.com/courses/getting-started-cisco-packet-tracer?courseLang=en-US&instance_id=812aea64-5a77-4414-9860-155f4ed4d01c";
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return <p>Redirecting to Cisco Packet Tracer course in 3 seconds...</p>;
}

export default function App(){
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/verify" element="https://verify.prmitr.in" />
        <Route path="/packet-tracer" element={<PacketTracerRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
