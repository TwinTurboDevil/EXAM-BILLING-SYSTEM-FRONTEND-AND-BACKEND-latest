import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

const AuthenticatedRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default AuthenticatedRoute;
