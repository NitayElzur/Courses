import React, { useState, useEffect } from "react";
import json from "../../json/product.json";
import ProductPage from "./ProductPage";

function ProductData() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(json.product);
  }, [json]);

  return (
    <>
      {product &&
        product.map((value, index) => (
          <ProductPage key={index} data={value} />
        ))}
    </>
  );
}

export default ProductData;
