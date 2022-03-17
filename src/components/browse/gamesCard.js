import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function GamesCard({
  id,
  cart,
  setCart,
  name,
  image_url,
  price,
}) {
  useEffect(
    function () {
      localStorage.setItem("Cart", cart);
    },
    [cart]
  );

  const handleAddToCart = (e, id) => {
    e.preventDefault();
    setCart((oldCart) => [...oldCart, id]);
  };

  return (
    <div className="card">
      <div className="card-info">
        <img src={image_url} />

        <h5>{name}</h5>
        <p className="card-price">{price}$</p>
      </div>
      <Link to={`details/${id}`}>
        <button className="card-button">Read More</button>
      </Link>
      {/* {cart.includes(id) ? (
        <button>Added</button>
      ) : (
        <button onClick={(e) => handleAddToCart(e, id)}>Add to cart</button>
      )} */}
    </div>
  );
}
