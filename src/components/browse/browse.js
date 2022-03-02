import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";

function Browse() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.comicbook.com/2020/04/amazon-b2g1-free-game-sale-1213790.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://blog.bestbuy.ca/wp-content/uploads/2017/12/Top_Rated_Video_Games_Best_Buy.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.southernsavers.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-27-at-1.30.29-PM.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h2>Game Collection</h2>
      <div className="games-library"></div>
    </>
  );
}
export default Browse;
