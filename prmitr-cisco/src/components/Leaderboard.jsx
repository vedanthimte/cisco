import React, { useState, useEffect } from "react";
import "./Leaderboard.css";
import { supabase } from "../data/supabaseClient"; // Supabase client

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [search, setSearch] = useState("");

  // Fetch leaderboard data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data: leaderboard, error } = await supabase
        .from("leaderboard")
        .select("*");

      if (error) {
        console.error("Error fetching leaderboard:", error.message);
      } else {
        setData(leaderboard);

        if (leaderboard.length > 0) {
          const availableMonths = Object.keys(leaderboard[0].scores || {});
          setMonths(availableMonths);
          setSelectedMonth(availableMonths[0]); // pick first month
        }
      }
    };

    fetchData();
  }, []);

  // Prepare filtered + ranked data
  const filteredData = data
    .map((row) => {
      const total = Object.values(row.scores || {}).reduce(
        (a, b) => a + b,
        0
      );
      return { ...row, total };
    })
    .filter(
      (row) =>
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.hackerId.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.total - a.total)
    .map((row, i) => ({ ...row, rank: i + 1 }));

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">🏆 Monthly DSA Contest Leaderboard</h1>

      {/* Controls */}
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
        </select>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="table-responsive">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>HackerRank ID</th>
              <th>{selectedMonth} Score</th>
              <th>Total Score</th>
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
                <td className="score">{row.scores[selectedMonth] || 0}</td>
                <td className="total">{row.total}</td>
                <td>{row.branch}</td>
                <td>{row.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
