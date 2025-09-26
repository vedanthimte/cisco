import React, { useState } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  // Sample data (can be fetched from API later)
  const data = [
    {
      rank: 1,
      name: "Vedant Himte",
      hackerId: "vedant123",
      branch: "CSE",
      year: "3rd",
      scores: { Jan: 300, Feb: 280, Mar: 400 },
    },
    {
      rank: 2,
      name: "Riya Sharma",
      hackerId: "riya_dev",
      branch: "IT",
      year: "2nd",
      scores: { Jan: 250, Feb: 290, Mar: 380 },
    },
    {
      rank: 3,
      name: "Arjun Mehta",
      hackerId: "arjun_codes",
      branch: "CSE",
      year: "4th",
      scores: { Jan: 270, Feb: 260, Mar: 350 },
    },
    {
      rank: 4,
      name: "Sneha Patel",
      hackerId: "sneha_hack",
      branch: "ECE",
      year: "3rd",
      scores: { Jan: 200, Feb: 300, Mar: 320 },
    },
  ];

  const months = ["Jan", "Feb", "Mar"];
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [search, setSearch] = useState("");

  // Filter + calculate scores
  const filteredData = data
    .map((row) => {
      const total = Object.values(row.scores).reduce((a, b) => a + b, 0);
      return { ...row, total };
    })
    .filter(
      (row) =>
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.hackerId.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.total - a.total) // sort by total score
    .map((row, i) => ({ ...row, rank: i + 1 })); // reassign ranks

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">🏆 Monthly DSA Contest Leaderboard</h1>

      {/* Search & Filter */}
      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search by Name or HackerRank ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="month-select"
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {m} Score
            </option>
          ))}
          <option value="total">Total Score</option>
        </select>
      </div>

      {/* Leaderboard Table */}
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>HackerRank ID</th>
            <th>{selectedMonth === "total" ? "Total Score" : `${selectedMonth} Score`}</th>
            <th>Branch</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className={row.rank <= 3 ? `top-${row.rank}` : ""}>
              <td className="rank">{row.rank}</td>
              <td>{row.name}</td>
              <td className="highlight">{row.hackerId}</td>
              <td className="score">
                {selectedMonth === "total"
                  ? row.total
                  : row.scores[selectedMonth]}
              </td>
              <td>{row.branch}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
