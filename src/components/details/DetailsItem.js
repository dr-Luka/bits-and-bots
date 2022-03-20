import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

export default function Details() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const [cart, setCart] = useContext(CartContext);

  useEffect(function () {
    async function fetchData() {
      try {
        const fetchUrl = `https://learnx-default.herokuapp.com/api/games/${id}/`;
        const response = await fetch(fetchUrl);

        if (response.ok) {
          const json = await response.json();
          setGame(json.data.attributes);
        } else {
          setError("An error occured");
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

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (cart.find((c) => c.id === parseInt(id))) return 0;

    const item = {
      id: parseInt(id),
      name: game.name,
      image_url: game.image_url,
      price: game.price,
    };
    setCart((oldCart) => [...oldCart, item]);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setCart((oldCart) => oldCart.filter((c) => c.id !== parseInt(id)));
  };

  return (
    <div className="details">
      <div className="details-img">
        <img src={game && game.image_url} />
      </div>
      <div className="details-info">
        <h3>{game && game.name}</h3>
        <p>Rating: {game && game.rating}/10</p>
        <p>{game && game.description}</p>
        <p>{game && game.price}$</p>
        {cart && cart.find((c) => c.id === parseInt(id)) ? (
          <button
            className="card-button remove-cart"
            onClick={(e) => handleRemove(e)}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="card-button add-cart"
            onClick={(e) => handleAddToCart(e)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
