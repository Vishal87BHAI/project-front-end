import Navbar from "../navigation/Navbar";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

export const CarouselSlider = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "50px" }}>
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="forest-1072828_1920.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>hello this is a first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="pexels-james-wheeler-414612.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="road-1072821_1920.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
