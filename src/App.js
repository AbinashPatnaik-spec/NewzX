import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <Navbar title="NewzX" />
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/news" element={<News />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
