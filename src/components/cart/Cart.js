import NavBar from "../layout/Nav.js";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Cart() {
  const [cart, setCart] = useContext(CartContext);

  const handleRemove = (e, id) => {
    e.preventDefault();
    setCart((oldCart) => oldCart.filter((c) => c.id !== parseInt(id)));
  };

  const cartSum = cart.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <>
      <div className="page">
        <NavBar />
        <h1>Your Cart</h1>
        <div className="cart-container">
          {cart.length ? (
            cart.map((game) => (
              <div className="cart-item" key={game.id}>
                <div className="cart-item-flex">
                  <FaTrash
                    className="cart-trash center"
                    onClick={(e) => handleRemove(e, game.id)}
                  />
                  <img className="cart-img" src={game.image_url} />
                  <div className="center">{game.name}</div>
                </div>
                <div className="center cart-item-flex">
                  <p>{game.price}$</p>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-empty">
              Cart is empty, go to <Link to="/browse">Browse</Link> and add
              games!
            </div>
          )}
        </div>
        {cart.length ? (
          <>
            <div className="cart-total">Total Price: {cartSum}$</div>
            <Link to="/checkout">
              <button className="add-cart card-button">Check Out</button>
            </Link>
          </>
        ) : (
          <button className="add-cart card-button disabled">Check Out</button>
        )}
      </div>
    </>
  );
}
