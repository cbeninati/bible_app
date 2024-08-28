import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Chapters from './pages/Chapters';
import Verses from './pages/Verses';
import VerseSelected from './pages/VerseSelected';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={ <Books />} />
        <Route path="/chapters" element={ <Chapters />} />
        <Route path="/verses" element={ <Verses />} />
        <Route path="/verse-selected" element={ <VerseSelected />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
