import { Carousel } from "react-bootstrap";

export default function BrowseBanner() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/learnx-no/image/upload/v1647714607/carousell1_651b317e17.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/learnx-no/image/upload/v1647714608/carousell2_8ce8172197.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/learnx-no/image/upload/v1647714607/carousell3_08d4e967ba.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
