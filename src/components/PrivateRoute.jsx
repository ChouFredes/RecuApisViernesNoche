import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ roles }) => {
  const { isLoggedIn, user } = useSelector(state => state.auth);

  if (!isLoggedIn) {
    // Usuario no autenticado, redirigir al login
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(user.role) === -1) {
    // Usuario no tiene el rol requerido, redirigir a la página de inicio
    return <Navigate to="/" />;
  }

  // Usuario autenticado y tiene el rol adecuado, renderizar el contenido
  return <Outlet />;
};

export default PrivateRoute;
