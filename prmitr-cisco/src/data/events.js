import dayjs from "dayjs"

export const events = [
  {
    id: "ccna-bootcamp",
    title: "CCNA Foundation Bootcamp",
    date: "2025-09-10",
    time: "10:00–16:00",
    mode: "On-Campus",
    location: "Lab 2, CS Block",
    tags: ["CCNA", "Routing & Switching"],
    description:
      "Fast-track IPv4/IPv6, subnetting, VLANs, trunking, STP, and routing fundamentals. Includes guided labs and take-home mini-labs.",
    link: "#"
  },
  {
    id: "cyber-ctf",
    title: "Blue Team Mini-CTF",
    date: "2025-08-28",
    time: "13:30–17:30",
    mode: "On-Campus",
    location: "Cyber Lab",
    tags: ["Security", "SOC", "SIEM"],
    description:
      "Triage logs, hunt threats, write incident notes, and practice SOC workflows. Beginner-friendly, tools provided.",
    link: "#"
  },
  {
    id: "devnet-apis",
    title: "Intro to DevNet & APIs",
    date: "2025-04-12",
    time: "15:00–17:00",
    mode: "Online",
    location: "Google Meet",
    tags: ["DevNet", "Automation"],
    description:
      "REST APIs, Python, and automation basics. Build your first automation script for a network device.",
    link: "#"
  },
  {
    id: "sase-cloud",
    title: "SASE & Cloud Networking Primer",
    date: "2025-07-02",
    time: "11:00–13:00",
    mode: "On-Campus",
    location: "Seminar Hall",
    tags: ["Cloud", "Security", "Architecture"],
    description:
      "Understand SD-WAN, SSE, and SASE concepts and how modern enterprises secure access.",
    link: "#"
  }
]

export const splitEvents = () => {
  const now = dayjs()
  const upcoming = events.filter(e => dayjs(e.date).isAfter(now.subtract(1,'day'))).sort((a,b)=>a.date.localeCompare(b.date))
  const past = events.filter(e => dayjs(e.date).isBefore(now.subtract(1,'day'))).sort((a,b)=>b.date.localeCompare(a.date))
  return { upcoming, past }
}

