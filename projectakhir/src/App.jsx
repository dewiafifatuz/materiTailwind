import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Beranda from './pages/beranda/MovieList'
import MovieList from './pages/beranda/MovieList'
import Detail from './pages/beranda/Detail'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/beranda" element={<Beranda/>}/>
          <Route path="/movie" element={<MovieList/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
        <Footer/>
  </BrowserRouter>
  );
};
export default App
