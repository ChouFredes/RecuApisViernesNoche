import React, { useState } from "react";
import { ProductPresentation } from "../ProductPresentation";
import db from "../../data/db.json"
import { useParams } from "react-router-dom";

export const Product = () => {
  const {id} = useParams();
  const products = db;
  const product = products.find(product => product.id === parseInt(id));

  return (
    <div className="ps-productList">
      <ProductPresentation key={product.id} product={product}> </ProductPresentation>
    </div>
  );
};
