import React, { Component } from "react";
import styles from "../../styles/Tabs.module.css";
 const imgs = [
  {
    author: "BERKINS Men's Mesh AIR Multi-Colored",
    tag: "Men",
    price: "$259",
    src:
    "/tabImg/men1.jpg",
  },
  {
    author: "girls Scarlett Wn S Idp Dark Denim Sneaker",
    tag: "Girl",
    price: "$199.56",
    src:
      "/tabImg/girl1.webp",
  },
  {
    author: "Stylish Black Sneaker Shoes for Women",
    tag: "Women",
    price: "$321.7",
    src:
      "/tabImg/women1.jpg",
  },
  {
    author: "boys Air Series Mesh Causal",
    tag: "Boys",
    price: "$123.4",
    src:
      "/tabImg/boys1.jpg",
  },
  {
    author: "Pace Cblack, Scarle Basketball Shoes-9",
    tag: "Boys",
    price: "$178.9",
    src:
      "/tabImg/boys2.jpg",
  },
  {
    author: "Big Fox Men's Dragon-3 Shoes",
    tag: "Men",
    price: "$215",
    src:
      "/tabImg/men2.jpg",
  },
  {
    author: "Girls Sneakers Breathable, Running Shoes",
    tag: "Girl",
    price: "$185.8",
    src:
      "/tabImg/girl2.jpg",
  },
  {
    author: "Sparx Women's Sx0123l Loafers",
    tag: "Women",
    price: "$256",
    src:
      "/tabImg/women2.jpg",
  },
];

const filters = [
  { name: "Men", status: false },
  { name: "Women", status: false },
  { name: "Boys", status: false },
  { name: "Girl", status: false },
];

const Filters = ({ onClickAll, all, onClick, filters }) => (
  <form className={styles.form}>
    <ul className={styles.ul}>
      <li className={styles.li} onClick={onClickAll}>
        <input className={styles.input} type="checkbox" checked={all} />
        <label className={styles.label} htmlFor="all">All</label>
      </li>
      {filters.map((filter, i) => (
        <li className={styles.li} key={i} data-index={i} onClick={onClick}>
          <input className={styles.input} id={filter.name} type="checkbox" checked={filter.status} />
          <label className={styles.label} htmlFor={filter.name}>{filter.name}</label>
        </li>
      ))}
    </ul>
  </form>
);

const Cards = ({ imgs }) => (
  <ul className={styles.ul}>
    {imgs.map((img, i) => (
      <li className={styles.li} key={i}>
        <figure className={styles.figure}>
          <img className={styles.img} src={img.src} alt={img.author} />
          <figcaption>
            <div className="text-center">{img.author} </div>
            <span className={`text-center text-danger ${styles.span}`}>{img.tag}
            <p className="text-center text-info">{img.price}</p>
            <p className="text-center text-white bg-primary rounded-pill mx-lg-5">Add to Cart +</p>
            </span>
          </figcaption>
        </figure>
      </li>
    ))}
  </ul>
);

class Tab extends React.Component {
  state = {
    imgs,
    filters,
    all: true,
  };

  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters,
    });

    this.updateFilters();
    this.updateImgs();
  };

  setAll = () => {
    const { filters } = this.state;

    filters.forEach((filter) => {
      filter.status = false;
    });

    this.setState({
      all: true,
      filters,
    });
  };

  updateFilters() {
    const allFiltersTrue = filters.every((filter) => filter.status === true);
    const allFiltersFalse = filters.every((filter) => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false,
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if (img.tag == filter.name && filter.status == true) {
          newImgs[a] = img;
          a++;
        }
      });
    });

    this.setState({
      imgs: newImgs,
    });
  }

  render() {
    const { filters, all } = this.state;
    return (
      <div>
        <Filters
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters}
        />
        {all ? <Cards imgs={imgs} /> : <Cards imgs={this.state.imgs} />}
      </div>
    );
  }
}

export default Tab