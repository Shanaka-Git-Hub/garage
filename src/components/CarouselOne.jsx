import Carousel from 'react-bootstrap/Carousel';
import SliderOne from './sliders/SliderOne';
import SliderTwo from './sliders/SliderTwo';
import SliderThree from './sliders/SliderThree';


function CarouselOne() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <SliderOne/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <SliderTwo/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <SliderThree/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselOne;