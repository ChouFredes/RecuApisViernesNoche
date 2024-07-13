import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import '../assets/css/Products.css';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState(null);
  const [strategy, setStrategy] = useState('NONE');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/api/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error al obtener las categorías');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const categoryQuery = selectedCategory ? `getByCategory/${selectedCategory}` : `sortedBy/${strategy}`;
        const response = await fetch(`http://localhost:8080/api/products/${categoryQuery}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
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
  }, [selectedCategory, strategy]);

  const handleStrategyChange = (event) => {
    setStrategy(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ps-productList">
      <div className="dropdown-container" style={styles.dropdownContainer}>
        <label htmlFor="category">Filtrar por categoría: </label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="dropdown-container" style={styles.dropdownContainer}>
        <label htmlFor="strategy">Ordenar por: </label>
        <select id="strategy" value={strategy} onChange={handleStrategyChange}>
          <option value="NONE">Todos</option>
          <option value="MAXMIN">Precio: Mayor a Menor</option>
          <option value="MINMAX">Precio: Menor a Mayor</option>
        </select>
      </div>
      <div className="ps-productGrid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            id={product.id}
            b64={product.b64}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

const styles = {
  dropdownContainer: {
    marginBottom: '20px',
  },
};
