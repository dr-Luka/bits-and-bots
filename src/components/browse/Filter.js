import { useState, useEffect } from "react";

export default function Filter({ games, setDisplayData }) {
  // const filters = ["Action", "FPS", "MMO", "Racing", "Sport"];

  const filters = [
    { id: 1, name: "Action" },
    { id: 2, name: "FPS" },
    { id: 3, name: "MMO" },
    { id: 4, name: "Racing" },
    { id: 5, name: "Sport" },
  ];

  const [filter, setFilter] = useState(0);

  const handleChange = (e) => {
    setFilter(parseInt(e.target.value));
  };

  useEffect(
    function () {
      if (filter === 0) {
        setDisplayData(games);
      } else {
        const filterName = filters.find((f) => f.id === filter).name;
        setDisplayData(
          games.filter(
            (game) =>
              game.attributes.genre === filterName
          )
        );
      }
    },
    [filter]
  );
  return (
    <select
      className="filter-handle"
      value={filter}
      onChange={(e) => handleChange(e)}
    >
      <option value={0}>Select Genre</option>
      {filters.map(function (filter) {
        return (
          <option key={filter.id} value={filter.id}>
            {filter.name}
          </option>
        );
      })}
    </select>
  );
}
