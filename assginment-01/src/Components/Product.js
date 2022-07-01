import React from "react";

const Product = ({productItem}) => {
  return (
    <div>
      {productItem.map((products) => (
        <div className="product-container">
          <img src={products.productImage} alt={products.productTitle} />
          <h2>{products.productTitle}</h2>
          <div className="product-price">
            <h4>Price : {products.price}</h4>
          </div>
          <div className="product-buttons-wrapper">
            <button>Add to cart</button>
            <button>Make offer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
