import Carousel from 'react-bootstrap/Carousel';
import "./HomeBanner.css";

function HomeBanner() {
  return (
    <Carousel>
    <Carousel.Item>
     <img src="https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143839.jpg" alt=""/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     <img src="https://img.freepik.com/free-vector/hand-drawn-electronics-store-facebook-template_23-2151138109.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais" alt=""/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     <img src="https://img.freepik.com/premium-vector/product-advertising-hero-image-header-layout_1302-21013.jpg" alt="" />
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

export default HomeBanner;