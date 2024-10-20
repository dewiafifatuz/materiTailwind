// FilmView.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MoviCard"; // Impor komponen MovieCard

const API_KEY = "a5afea59d4b6f7c5939e914688eb9e3d"; // Ganti dengan API key kamu

const FilmView = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ratings, setRatings] = useState({}); // State untuk menyimpan rating film

  // Mengambil data film dari API
  const fetchMovies = async () => {
    try {
      const [popularResponse, nowPlayingResponse, topRatedResponse] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`),
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`),
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`),
      ]);

      setPopularMovies(popularResponse.data.results);
      setNowPlayingMovies(nowPlayingResponse.data.results);
      setTopRatedMovies(topRatedResponse.data.results);
      setLoading(false);
    } catch (err) {
      setError("Gagal memuat film: " + err.message);
    }
  };

  useEffect(() => {
    // Mengambil data rating dari localStorage saat halaman pertama kali dibuka
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    setRatings(storedRatings);
    fetchMovies(); // Mengambil data film
  }, []);

  const handleRatingChange = (movieId, newRating) => {
    // Ambil rating saat ini dari localStorage
    const currentRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    // Simpan rating baru
    currentRatings[movieId] = newRating;
    // Simpan kembali ke localStorage
    localStorage.setItem("ratings", JSON.stringify(currentRatings));
    // Update state rating
    setRatings((prevRatings) => ({
      ...prevRatings,
      [movieId]: newRating,
    }));
  };

  if (loading) {
    return <p>Memuat film...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="home bg-gray-800 text-white p-5 space-y-8">
      <h1>Selamat datang di Film App</h1>

      {/* Daftar film populer */}
      <div className="popular-movies">
        <h2 className="text-2xl font-bold mb-4">Film Populer</h2>
        <div className="movie-slider overflow-x-scroll scrollbar-hide">
          <div className="flex space-x-4">
            {popularMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                rating={ratings[movie.id] || 0} // Rating dari state
                onRatingChange={handleRatingChange} // Fungsi untuk mengubah rating
              />
            ))}
          </div>
        </div>
      </div>

      {/* Daftar film yang sedang tayang */}
      <div className="now-playing-movies">
        <h2 className="text-2xl font-bold mb-4">Film yang Sedang Tayang</h2>
        <div className="movie-slider overflow-x-scroll scrollbar-hide">
          <div className="flex space-x-4">
            {nowPlayingMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                rating={ratings[movie.id] || 0} // Rating dari state
                onRatingChange={handleRatingChange} // Fungsi untuk mengubah rating
              />
            ))}
          </div>
        </div>
      </div>

      {/* Daftar film dengan rating tertinggi */}
      <div className="top-rated-movies">
        <h2 className="text-2xl font-bold mb-4">Film dengan Rating Tertinggi</h2>
        <div className="movie-slider overflow-x-scroll scrollbar-hide">
          <div className="flex space-x-4">
            {topRatedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                rating={ratings[movie.id] || 0} // Rating dari state
                onRatingChange={handleRatingChange} // Fungsi untuk mengubah rating
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmView;
