import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './pages/beranda/MovieList';
import Detail from './pages/beranda/Detail';
import RatingAnda from './components/RatingAnda';
import FilmView from './pages/film/FilmView';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/film" element={<FilmView />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/rated-movies" element={<RatingAnda />} />
          {/* Default Route */}
          <Route path="/" element={<Beranda />} /> {/* Arahkan ke Beranda jika tidak ada rute yang cocok */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
