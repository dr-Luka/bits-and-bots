import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

export default function GamesCard({ id, name, image_url, price }) {
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (cart.find((c) => c.id === parseInt(id))) return 0;
    const item = { id, name, image_url, price };
    setCart((oldCart) => [...oldCart, item]);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setCart((oldCart) => oldCart.filter((c) => c.id !== id));
  };

  const cartSum = cart.reduce((prev, curr) => prev + curr.price, 0);

  console.log(cartSum);

  return (
    <div className="card">
      <div className="card-info">
        <img src={image_url} />

        <h5>{name}</h5>
        <p className="card-price">{price}$</p>
      </div>
      <Link to={`details/${id}`}>
        <button className="card-button read-more">Read More</button>
      </Link>

      {cart && cart.find((c) => c.id === id) ? (
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
  );
}
