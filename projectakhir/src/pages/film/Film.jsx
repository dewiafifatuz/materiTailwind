// src/components/FilmView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const API_KEY = "a5afea59d4b6f7c5939e914688eb9e3d"; // Ganti dengan API Key kamu

const FilmView = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data film
  const fetchMovies = async () => {
    try {
      const popularResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`);
      const nowPlayingResponse = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`);
      const topRatedResponse = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`);
      
      setPopularMovies(popularResponse.data.results);
      setNowPlayingMovies(nowPlayingResponse.data.results);
      setTopRatedMovies(topRatedResponse.data.results);
    } catch (err) {
      setError("Gagal memuat film: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <p>Memuat film...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gray-900 p-4">
      <h1 className="text-3xl mb-4">Film Populer</h1>
      <div className="movie-slider">
        {popularMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      <h1 className="text-3xl mt-8 mb-4">Film yang Sedang Tayang</h1>
      <div className="movie-slider">
        {nowPlayingMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      <h1 className="text-3xl mt-8 mb-4">Film dengan Rating Tertinggi</h1>
      <div className="movie-slider">
        {topRatedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FilmView;
