import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StudentPage from './pages/StudentPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ScannerPage from './pages/ScannerPage';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/admin/scan" element={<ProtectedRoute><ScannerPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
