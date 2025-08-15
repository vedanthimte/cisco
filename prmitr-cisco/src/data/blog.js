export const posts = [
  {
    slug: "why-ccna-still-matters",
    title: "Why CCNA Still Matters in 2025",
    date: "2025-07-20",
    author: "NetAcad Team",
    excerpt: "CCNA remains a powerful launchpad for networking careers. Here’s how to leverage it alongside cloud & automation.",
    cover: "",
    markdown: `
### CCNA’s Relevance
CCNA covers IP addressing, routing, switching, and troubleshooting—skills that remain core even as networks move to cloud.

**Tips to win:**
- Lab daily (Packet Tracer/GNS3/EVE-NG).
- Keep a lab journal or GitHub repo with configs.
- Map each exam objective to a mini-lab and test yourself weekly.

> Bonus: Learn basic Python + REST APIs for a head start in automation.
`
  },
  {
    slug: "a-simple-guide-to-subnetting",
    title: "A Simple Guide to Subnetting",
    date: "2025-06-12",
    author: "Priya Patil",
    excerpt: "A crisp mental model for subnetting so you can solve exam questions faster.",
    cover: "",
    markdown: `
### A Fast Model
Think in powers of two. Borrow bits to create subnets; remaining bits define hosts.

- /24 → 256 addresses  
- /26 → 64 addresses  
- /30 → 4 addresses

Practice by writing network, first host, last host, and broadcast for random prefixes.
`
  },
  {
    slug: "soc-analyst-starter-pack",
    title: "SOC Analyst Starter Pack",
    date: "2025-08-05",
    author: "Security Lead Team",
    excerpt: "Tools, habits, and a 30-day plan to go from zero to junior SOC analyst.",
    cover: "",
    markdown: `
### What To Learn
- Log sources (EDR, firewall, IDS, proxy)
- SIEM queries (basic filtering, regex, aggregation)
- Incident notes and escalation

### 30-Day Plan
- Week 1: Linux basics, networking recap
- Week 2: SIEM query practice
- Week 3: Malware/Phishing triage patterns
- Week 4: Build incident report templates and do mock drills
`
  }
]

