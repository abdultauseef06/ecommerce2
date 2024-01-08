// Inside Logout.js

import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/" />;
};

export default Logout; // Make sure to export the component as the default export
