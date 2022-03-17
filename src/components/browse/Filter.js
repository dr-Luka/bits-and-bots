import { useState, useEffect } from "react";

export default function Filter({ games, setDisplayData }) {
  const filters = ["Action", "FPS", "MMO", "Racing", "Sport"];
  const [filter, setFilter] = useState("Filter");

  useEffect(
    function () {
      if (filter === "Filter") {
        setDisplayData(games);
      } else {
        setDisplayData(
          games.filter((game) => game.attributes.genre === filter)
        );
      }
    },
    [filter]
  );
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option>Select Genre</option>
      {filters.map(function (filter) {
        return <option key={filter}>{filter}</option>;
      })}
    </select>
  );
}
