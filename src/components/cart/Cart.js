import NavBar from "../layout/Nav.js";

export default function Cart() {
  const cartGames = localStorage.getItem("Cart");
  console.log(cartGames);

  // cartGames.forEach((game) => {
  //   console.log(game);
  // });

  return (
    <>
      <div className="page">
        <NavBar />

        <h1>Your Cart</h1>
        <div className="cart-container">
          <div className="cart-item">
            <div className="cart-item-flex">
              <img
                className="cart-img"
                src="https://res.cloudinary.com/learnx-no/image/upload/v1646683449/small_mlb21_0b3214ff5d.jpg"
              />
              <div className="center">MLB Show 21</div>
            </div>
            <div className="center">19.95$</div>
          </div>
        </div>
      </div>
    </>
  );
}
