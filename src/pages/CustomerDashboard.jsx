import '../assets/css/Dashboard.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h1>Customer Dashboard</h1>
      <button onClick={handleLogout} style={styles.logoutButton}>Cerrar Sesión</button>
      <div className="dashboard-section">
        <Link to="/cart" style={styles.link}>
          <h2>Carrito</h2>
        </Link>
        <Link to="/orders" style={styles.link}>
          <h2>Órdenes</h2>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  logoutButton: {
    backgroundColor: '#FF4C4C',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    display: 'block',
    margin: '10px 0',
  },
};

export default CustomerDashboard;