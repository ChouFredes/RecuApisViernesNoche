import { ProductCard } from '../ProductCard';

import React, { useState, useEffect } from 'react';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/11366643-2237-4cd8-b5e8-3887f50fa2d6');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ps-productList">
      {products.map((product) => (
        <ProductCard key={product.id} name={product.name} price={product.price} id={product.id} image={product.image} ></ProductCard>
      ))}
    </div>
  );
};