// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Chapters from './pages/Chapters';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={ <Books />} />
        <Route path="/chapters" element={ <Chapters />} />
      </Routes>
    </Router>
  );
}

export default App;
