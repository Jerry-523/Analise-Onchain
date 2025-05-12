import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Metrics from './pages/Metrics';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </Router>
  );
}
