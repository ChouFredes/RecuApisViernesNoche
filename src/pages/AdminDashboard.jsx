import '../assets/css/Dashboard.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout} style={styles.logoutButton}>Cerrar Sesión</button>
      <div className="dashboard-section">
        <h2>User Management</h2>
        <p>Manage user accounts and roles.</p>
      </div>
      <div className="dashboard-section">
        <h2>Product Management</h2>
        <p>Add, update, and delete products.</p>
      </div>
      <div className="dashboard-section">
        <h2>Order Management</h2>
        <p>View and manage customer orders.</p>
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
};

export default AdminDashboard;