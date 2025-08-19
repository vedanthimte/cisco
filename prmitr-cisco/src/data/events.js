import dayjs from "dayjs"

export const events = [
  {
    id: "ccna-bootcamp",
    title: "CCNA 1 WorkShop",
    date: "2024-12-12",
    time: "10:00–16:00",
    mode: "On-Campus",
    location: "CSE DEPT ,PRMITR ",
    tags: ["CCNA", "Routing & Switching"],
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
    tags: ["CCNA", "Routing & Switching"],
    description:
      "Complete Packet Tracer Fast-track IPv4/IPv6, subnetting, VLANs. Includes guided labs and take-home mini-labs.",
    link: "#"
  },
  {
  id: "dsa",
  title: "DSA Contest",
  date: "2025-09-05",
  time: "13:30–17:30",
  mode: "Online",
  location: "HackerEarth",
  tags: ["Algorithms", "Data Structures", "Competitive Programming"],
  description:
    "Solve challenging problems on arrays, trees, algorithms. Beginner to advanced levels, leaderboard live.",
  link: "#" },
  
  {
  id: "cyber-security",
  title: "Cyber Security Workshop",
  date: "2025-09-13",
  time: "11:00–13:00",
  mode: "On-Campus",
  location: "CSE Dept, PRMITR",
  tags: ["Cloud Security", "Network Architecture", "Enterprise Security"],
  description:
    "Learn core concepts of SD-WAN, SSE, and SASE, and explore how modern enterprises design secure access solutions.",
  link: "#"
}

]

export const splitEvents = () => {
  const now = dayjs()
  const upcoming = events.filter(e => dayjs(e.date).isAfter(now.subtract(1,'day'))).sort((a,b)=>a.date.localeCompare(b.date))
  const past = events.filter(e => dayjs(e.date).isBefore(now.subtract(1,'day'))).sort((a,b)=>b.date.localeCompare(a.date))
  return { upcoming, past }
}

