import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [strategy, setStrategy] = useState('NONE'); // Estado para la estrategia de ordenamiento

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8080/api/products/sortedBy/${strategy}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
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
  }, [strategy]); // Vuelve a ejecutar el fetchData cuando cambie la estrategia

  const handleStrategyChange = (event) => {
    setStrategy(event.target.value);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ps-productList">
      <div className="dropdown-container">
        <label htmlFor="strategy">Ordenar por: </label>
        <select id="strategy" value={strategy} onChange={handleStrategyChange}>
          <option value="NONE">Todos</option>
          <option value="MAXMIN">Precio: Mayor a Menor</option>
          <option value="MINMAX">Precio: Menor a Mayor</option>
        </select>
      </div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          id={product.id}
          image={product.image}
        ></ProductCard>
      ))}
    </div>
  );
};

const styles = {
  dropdownContainer: {
    marginBottom: '20px',
  },
};
