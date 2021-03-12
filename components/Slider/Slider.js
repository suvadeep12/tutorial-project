import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../../styles/Slider.module.css";
import Image from "next/image";

function Slider() {
  return (
    <div className="d-flex">
      <div className={styles.left_side2}>
        <h1 className={styles.left_side_header}>BE ACTIVE</h1>
      </div>
      <div className={`mx-auto ${styles.right_side2}`}>
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block "
              src="/tabImg/boys1.jpg"
              alt="First slide"
              width={900}
              height={930}
            />
            <Carousel.Caption>
              <h3 className="text-info">First slide label</h3>
              <p className="text-success">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block "
              src="/tabImg/men2.jpg"
              alt="Second slide"
              width={900}
              height={930}
            />

            <Carousel.Caption>
              <h3 className="text-warning">Second slide label</h3>
              <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block "
              src="/tabImg/girl2.jpg"
              alt="Third slide"
              width={900}
              height={930}
            />

            <Carousel.Caption>
              <h3 className="text-danger">Third slide label</h3>
              <p className="text-info">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
