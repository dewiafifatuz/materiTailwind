import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "a5afea59d4b6f7c5939e914688eb9e3d"; // Ganti dengan API key kamu

const FilmView = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [ratings, setRatings] = useState({}); // State untuk menyimpan rating film

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
      );
      setPopularMovies(response.data.results);
    } catch (err) {
      setError("Gagal memuat film populer: " + err.message);
    }
  };

  const fetchNowPlayingMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`
      );
      setNowPlayingMovies(response.data.results);
    } catch (err) {
      setError("Gagal memuat film yang sedang tayang: " + err.message);
    }
  };

  const fetchTopRatedMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
      );
      setTopRatedMovies(response.data.results);
    } catch (err) {
      setError("Gagal memuat film dengan rating tertinggi: " + err.message);
    }
  };

  const searchMovies = async (query) => {
    if (!query) {
      setSearchedMovies([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
      );
      setSearchedMovies(response.data.results);
    } catch (err) {
      setError("Gagal memuat hasil pencarian: " + err.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchPopularMovies(),
      fetchNowPlayingMovies(),
      fetchTopRatedMovies(),
    ])
      .then(() => setLoading(false))
      .catch((err) => setError("Gagal memuat data film: " + err.message));
  }, []);

  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    setRatings(storedRatings);
  }, []);

  const handleRatingChange = (movieId, newRating) => {
    const currentRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    currentRatings[movieId] = newRating;
    localStorage.setItem("ratings", JSON.stringify(currentRatings));
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
      {/* Komponen pencarian */}
      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Cari film..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            searchMovies(e.target.value);
          }}
        />
      </div>
  
      {/* Daftar film populer */}
      <div className="popular-movies">
        <h2 className="text-2xl font-bold mb-4">Film Populer</h2>
        <div className="movie-slider overflow-x-scroll scrollbar-hide">
          <div className="flex space-x-4">
            {popularMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                rating={ratings[movie.id] || 0}
                onRatingChange={handleRatingChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};  

const MovieCard = ({ movie, rating, onRatingChange }) => {
    return (
      <div className="min-w-[200px] shadow-lg rounded-lg">
        <Link to={`/detail/${movie.id}`}>  {/* Tautan menuju halaman detail */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover rounded-t-lg cursor-pointer" // Pastikan ada `cursor-pointer` untuk menampilkan pointer saat gambar di-hover
          />
          <h3 className="text-center text-xl font-bold truncate p-2 hover:text-red-500">
            {movie.title}
          </h3>
        </Link>
        <div className="join">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`join-item btn ${rating >= star ? "btn-active" : ""}`}
              onClick={() => onRatingChange(movie.id, star)}
            >
              {star} ★
            </button>
          ))}
        </div>
      </div>
    );
  };
  

export default FilmView;
