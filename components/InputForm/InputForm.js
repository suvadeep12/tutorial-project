import React from "react";
import styles from "../../styles/InputForm.module.css";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";

function InputForm() {
  return (
    <div>
      <div className={`d-flex justify-content-center ${styles.top_sec}`}>
        <div className="d-flex">
          <div className="pr-lg-4">
            <Image src="/banners/telegram.png" width={45} height={45} />
          </div>
          <div>
            <h5>Sign up to Newsletter</h5>
            <p>...and receive $20 coupon for first shopping</p>
          </div>
        </div>
        <div className="pl-lg-5">
          <Form className="d-flex">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className={styles.formControl}
                type="email"
                placeholder="Enter your email address"
              />
            </Form.Group>
            <Button className={styles.btn1} type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className={`d-flex justify-content-center ${styles.low_sec}`}>
        <div className="d-flex pr-lg-4">
          <div  className="pr-lg-2">
            <Image src="/banners/facebook.png" width={20} height={20} />
          </div>
          <div>
            <p>Facebook</p>
          </div>
        </div>
        <div className="d-flex pr-lg-4">
          <div  className="pr-lg-2">
            <Image src="/banners/twitter.png" width={20} height={20} />
          </div>
          <div>
            <p>Twitter</p>
          </div>
        </div>
        <div className="d-flex pr-lg-4">
          <div  className="pr-lg-2">
            <Image src="/banners/google.png" width={20} height={20} />
          </div>
          <div>
            <p>Google+</p>
          </div>
        </div>
        <div className="d-flex pr-lg-4">
          <div  className="pr-lg-2">
            <Image src="/banners/vimeo.png" width={20} height={20} />
          </div>
          <div>
            <p>Vimeo</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="pr-lg-2">
            <Image src="/banners/rss.png" width={20} height={20} />
          </div>
          <div>
            <p>RSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
