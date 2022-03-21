import NavBar from "../layout/Nav";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useHistory } from "react-router-dom";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { number } from "yup";

function Checkout() {
  const history = useHistory();
  const [cart, setCart] = useContext(CartContext);
  const cartSum = cart.reduce((prev, curr) => prev + curr.price, 0);

  const [form, setForm] = useState({
    name: "",
    address: "",
    cardNumber: "",
    cardDate: "",
    cardCvv: "",
  });

  const handleChange = (e) => {
    setForm((oldForm) => ({ ...oldForm, [e.target.name]: e.target.value }));
  };

  function checkOutUser(e) {
    e.preventDefault();
    if (window.confirm("Do you want to pay and check out?")) {
      if (
        form.name.length > 0 &&
        form.address.length > 0 &&
        form.cardNumber.length > 0 &&
        form.cardDate.length > 0 &&
        form.cardCvv.length > 0
      ) {
        setCart([]);
        history.push("/browse");
      } else {
        console.log("ERROR");
      }
    }
  }

  return (
    <>
      <div className="page">
        <NavBar />
        <h1>Checkout</h1>
        <div className="order">
          <h3>Your order</h3>
          <p>Number of products: {cart.length} </p>
          <p>Total Price: {cartSum}</p>
        </div>
        <form className="checkout-form" onSubmit={(e) => checkOutUser(e)}>
          <div className="form-flex">
            <div className="checkout-form-user">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Address"
                id="address"
                name="address"
                value={form.address}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="checkout-form-card">
              <input
                type="text"
                placeholder="Credit Card Number"
                id="card-number"
                name="cardNumber"
                value={form.cardNumber}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Expiration Date"
                id="card-date"
                name="cardDate"
                value={form.cardDate}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="CCV"
                id="card-cvv"
                name="cardCvv"
                value={form.cardCvv}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <button className="add-cart card-button" type="submit">
            Check Out
          </button>
        </form>
      </div>
    </>
  );
}
export default Checkout;
