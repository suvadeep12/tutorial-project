import styles from "../styles/header.module.css";
import Image from "next/image";
function Header() {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-lg bg-white">
  <section>
    <Image src="/sneakers.png" width={150} height={70}/>
  </section>
  <section className="ml-auto">
  <div class="container-fluid">
  <div className="">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-danger" aria-current="page" href="#">SUPER DEALS</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MOTHER`S DAY
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PAGES
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">LOGITECH SALE</a>
        </li>
      </ul>     
      </div>



    </div>
  </div>
  </section>

  <section className="ml-auto">
  <div className="d-flex mt-4">
      <div className="mr-lg-5">
      <Image src="/threedot.png" width={20} height={30}/>
      </div>
      <div className={`mr-lg-5 ${styles.cart}`}>
      <Image src="/two-thin-arrows.png" width={30} height={30}/>
      <p className={styles.cartItem}>4</p>
      </div>
      <div className={`mr-lg-5 ${styles.cart}`}>
      <Image src="/heart-outline.png" width={30} height={30}/>
      <p className={styles.cartItem}>4</p>
      </div>
      <div className={`mr-lg-5 ${styles.cart}`}>
      <Image src="/shopping-bag.png" width={30} height={30}/>
      <p className={styles.cartItem}>7</p>
      </div>
      <div className="mr-lg-5">
        <p>Your Cart <br/> $166.99</p>
      </div>
      </div>

  </section>

</nav>
    </div>
  );
}

export default Header;
