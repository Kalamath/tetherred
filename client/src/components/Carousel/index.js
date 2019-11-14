import React from "react";
import Carousel from 'react-bootstrap/Carousel'
// import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';

import bike from "../../assets/imgs/bike.jpg";
import lift from "../../assets/imgs/lift.jpg";
import swim from "../../assets/imgs/swim.jpg";


function TopCarousel() {
  return (
    <Jumbotron>
      
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bike}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={lift}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={swim}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
   
    </Jumbotron>
  );
}

export default TopCarousel;
