import Head from "next/head";
import Mainlayout from "../container/layout/main-layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tab from "../components/Tabs/Tabs";
import Slider from "../components/Slider/Slider";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import InputForm from "../components/InputForm/InputForm";
import Lightning from "../components/Lightning/Lightning";
// import Products from "../components/Products/Products";
export default function Home() {
  return (
    <Mainlayout>
      <Head>
        <title>SHOES | HOME</title>
        <link rel="icon" href="/sneakers.png" />
      </Head>
      <section className={styles.container}>
        <div className={styles.left_side}>
          <p className={styles.btn_2}>ONLY IN 04.04-10.04</p>
          <h1 className="text-white text-lg-right">WEEKEND SALE</h1>
          <p className="text-white text-lg-right">-20% CUT FOR EVERYTHING*</p>
          <button className={styles.btn_1}>
            GET YOURS NOW{" "}
            <Image src="/redo.png" className="pt-lg-2" width={25} height={17} />
          </button>
        </div>

        <div className={styles.right_side}>
          <Image src="/home-v10-img-1.png" width={400} height={500} />
        </div>
      </section>

      <section className={styles.container_2}>
        <div className={styles.div1}>
          <h1 className={`pt-lg-5 ${styles.headerItem}`}>MEN</h1>
          <p className={styles.headerItem}>NEW COLLECTION</p>
        </div>
        <div className={styles.div2}>
          <h1 className={`pt-lg-5 ${styles.headerItem}`}>BABYS</h1>
          <p className={styles.headerItem}>NEW COLLECTION</p>
        </div>
        <div className={styles.div3}>
          <h1 className={`pt-lg-5 ${styles.headerItem}`}>KIDS & YOUNG</h1>
          <p className={styles.headerItem}>NEW COLLECTION</p>
        </div>
        <div className={styles.div4}>
          <h1 className={`pt-lg-5 ${styles.headerItem}`}>WOMEN</h1>
          <p className={styles.headerItem}>NEW COLLECTION</p>
        </div>
      </section>

      <section className={styles.container_3}>
        <h1 className={styles.newheader}>Shop New Arraivals 2021</h1>
        <Tab />
      </section>

      <section className={`bg-primary ${styles.container_4}`}>
        <h3 className="text-white text-center py-2">
          Download our new app today! Dont miss our mobile-only offers and shop
          with Android Play.
        </h3>
      </section>

      <section className={styles.container_5}>
        <Slider/>
      </section>
{/* 
      <section>
        <Products/>
      </section> */}

      <section className={styles.container_6}>
        <ImageGrid/>
      </section>

      <section>
        <InputForm/>
      </section>
      
      <section>
        <Lightning/>
      </section>
    </Mainlayout>
  );
}
