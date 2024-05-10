import React, { useState } from "react";
import "./products.scss";
import axios from "../../assets/api";
import ProductData from "../productData/ProductData";

function Products() {
  const [product, setProducts] = useState(null);

  // const productsData = pro?.map((el) => (
  //   <div key={el.id} className="products__card">
  //     <div className="products__card__img">
  //       <img onClick={() => setProducts(el)} src={el.thumbnail} alt="" />
  //     </div>
  //     <div className="products__card__info">
  //       <h2 className="products__card__title">brand: {el.brand}</h2>
  //       <p className="products__card__desc">category:{el.category}</p>
  //       <p className="products__card__desc">
  //         <del>stock: {el.stock}</del> price: {el.price}
  //       </p>
  //     </div>
  //   </div>
  // ));

  return (
    <div key={el.id} className="products__card">
      <div className="products__card__img">
        <img src={el.thumbnail} alt="" />
      </div>
      <div className="products__card__info">
        <h2 className="products__card__title">brand: {el.brand}</h2>
        <p className="products__card__desc">category:{el.category}</p>
        <p className="products__card__desc">
          <del>stock: {el.stock}</del> price: {el.price}
        </p>
      </div>
    </div>
  );
}

export default Products;
