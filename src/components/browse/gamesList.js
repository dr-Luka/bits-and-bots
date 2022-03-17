import { useState, useEffect } from "react";
import GamesCard from "./GamesCard";

import Filter from "./Filter";

export default function GamesList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(localStorage.getItem("Cart"));

  const [displayData, setDisplayData] = useState(games);

  useEffect(function () {
    async function fetchData() {
      try {
        const url = "https://learnx-default.herokuapp.com/api/games";
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          setGames(json.data);
        } else {
          setError("An error occurred");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>ERROR: An error occurred</div>;
  }

  return (
    <>
      <Filter setDisplayData={setDisplayData} games={games} />
      <div className="games">
        {displayData.map(function (game) {
          const { name, price, image_url } = game.attributes;
          const { id } = game;
          return (
            <GamesCard
              key={name}
              id={id}
              cart={cart}
              setCart={setCart}
              name={name}
              price={price}
              image_url={image_url}
            />
          );
        })}
      </div>
    </>
  );
}
