import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  // If useAuth is not yet configured, allow children or redirect
  return children ?? <Outlet />;
}
