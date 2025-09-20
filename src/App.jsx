import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;