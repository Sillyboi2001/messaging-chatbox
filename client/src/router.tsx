import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthenticationLayout } from './pages/layouts/AuthenticationLayout';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

const router = createBrowserRouter([
  {
    element: <AuthenticationLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ]
  }
]);

export default router;
