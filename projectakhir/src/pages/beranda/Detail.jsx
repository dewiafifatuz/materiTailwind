// src/components/Detail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "a5afea59d4b6f7c5939e914688eb9e3d"; // Ganti dengan API Key kamu

const Detail = () => {
  const { id } = useParams(); // Mengambil id dari URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil detail film berdasarkan id
  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      setMovie(response.data); // Menyimpan data film ke state
    } catch (err) {
      setError("Gagal memuat detail film: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails(id); // Memanggil fungsi untuk mengambil data ketika komponen dimuat
  }, [id]);

  if (loading) {
    return <p>Memuat detail film...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Film tidak ditemukan</p>;
  }

  return (
    <div className="detail bg-gray-800 text-white p-5">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <Link to={`/detail/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="mb-4 w-full h-auto max-w-md cursor-pointer"
        />
      </Link>
      <p className="text-lg mb-4">{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
      <p><strong>Duration:</strong> {movie.runtime} minutes</p>
    </div>
  );
};

export default Detail;
