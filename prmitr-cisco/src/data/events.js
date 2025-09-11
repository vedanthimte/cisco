import dayjs from "dayjs"

export const events = [
  {
    id: "ccna-bootcamp",
    title: "CCNA 1 WorkShop",
    date: "2024-12-12",
    time: "10:00–16:00",
    mode: "On-Campus",
    location: "CSE DEPT ,PRMITR ",
    tags: ["CCNA", "Routing & Switching","Official Certificate"],
    description:
      "7+ Days Training Workshop-subnetting,and routing fundamentals. Includes guided labs and take-home mini-labs.",
    link: "#"
  },
  {
    id: "packer-bootcamp",
    title: "Packet Tracer WorkShop",
    date: "2024-09-10",
    time: "10:00–16:00",
    mode: "On-Campus",
    location: "CSE DEPT ,PRMITR ",
    tags: ["CCNA", "Routing & Switching", "Official Certificate"],
    description:
      "Complete Packet Tracer Fast-track IPv4/IPv6, subnetting, VLANs. Includes guided labs and take-home mini-labs.",
    link: "#"
  },
  {
  id: "dsa",
  title: "DSA Contest",
  date: "2025-09-19",
  time: "13:30–17:30",
  mode: "On-Campus",
  location: "CSE Dept, PRMITR",
  tags: ["Algorithms", "Data Structures", "Competitive Programming"],
  description:
    "Solve challenging problems on arrays, trees, algorithms. Beginner to advanced levels, leaderboard live.",
  link: "/contest" },
  
  {
  id: "cyber-security",
  title: "Cyber Security Workshop",
  date: "2025-09-08",
  time: "11:00–13:00",
  mode: "On-Campus",
  location: "CSE Dept, PRMITR",
  tags: ["Ethical Hacking", "Live Attack Perform", "Data Privacy"],
  description:
    "Learn core concepts of Linux, Pentesting and explore how modern enterprises design secure access solutions.",
  link: "/register"
} ,
{
  id: "orientation-program-25",
  title: "Orientation Program '25",
  date: "2025-09-15",
  time: "11:00–13:00",
  mode: "On-Campus",
  location: "Extc Dept, PRMITR",
  tags: ["Know About Cisco", "Plan Of Action", "Certification"],
  description:
    "Know about PRMITR CISCO NETWORKING ACADEMY, last year achievements, felicitation, courses, future scope.",
  link: "#",
  live: false 
}


]

export const splitEvents = () => {
  const now = dayjs()
  const upcoming = events.filter(e => dayjs(e.date).isAfter(now.subtract(1,'day'))).sort((a,b)=>a.date.localeCompare(b.date))
  const past = events.filter(e => dayjs(e.date).isBefore(now.subtract(1,'day'))).sort((a,b)=>b.date.localeCompare(a.date))
  return { upcoming, past }
}

