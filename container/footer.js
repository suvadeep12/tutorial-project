import styles from "../styles/footer.module.css";
import Image from "next/image";
function Footer() {
  return (
    <div className="mx-auto border-top border-info pt-5 bg-secondary">
      <section className="d-flex justify-content-around">
        <div className={styles.main_logo}>
          <Image src="/sneakers.png" width={300} height={250} />
        </div>
        <div className={styles.products}>
          <h6 className={styles.header_line}>SPECIAL COLLECTIONS</h6>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home&Living</p>
          <p>Gift Cards</p>
        </div>
        <div className={styles.useful_links}>
          <h6 className={styles.header_line}>IMPORTANT LINKS</h6>
          <p>FAQ</p>
          <p>Terms of Use</p>
          <p>Track Order</p>
          <p>Shipping</p>
          <p>Privacy Policy</p>
        </div>
        <div className={styles.describe}>
          <div className="pb-3">
            <h6 className={styles.header_line}>OUR APP ON MOBILE</h6>
            <div className="d-flex justify-content-around pt-lg-2">
              <div className="shadow ">
                <Image src="/playStore.png" width={100} height={30} />
              </div>
              <div className="ml-md-3 shadow">
                <Image src="/appleStore.png" width={100} height={30} />
              </div>
            </div>
          </div>
          <div className="py-3">
            <h6 className={styles.header_line}>KEEP IN TOUCH</h6>
            <div className="d-flex justify-content-around pt-lg-2">
              <div className="shadow">
                <Image src="/facebook.png" width={20} height={20} />
              </div>
              <div className="shadow">
                <Image src="/twitter.png" width={20} height={20} />
              </div>
              <div className="shadow">
                <Image src="/youtube.png" width={20} height={20} />
              </div>
              <div className="shadow">
                <Image src="/instagram.png" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-around text-center bg-dark">
        <div className="px-lg-5 text-white">
          <h6 className="m-0 p-1">
            © 2021 www.Zikode-SHOES.com. All rights reserved.
          </h6>
        </div>
        <div className="d-flex">
          <h6 className="text-white pr-lg-2">Made with</h6>{" "}
          <Image src="/banners/heart.png" width={20} height={10} />{" "}
          <h6 className="text-white pl-lg-2">by Suvadeep.</h6>
        </div>
      </section>
    </div>
  );
}

export default Footer;
