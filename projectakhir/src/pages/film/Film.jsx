import React from 'react';
import { useEffect, useState } from "react";
import FilmView from "./FilmView.jsx"; // Mengimpor FilmView
import axios from "axios";

const API_KEY = "a5afea59d4b6f7c5939e914688eb9e3d"; // Ganti dengan API key kamu

const Film = () => {
  const [film, setFilm] = useState([]); // Ubah dari product menjadi film
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ambilFilm = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = response.data.results; // Ambil hasil dari respons
      setFilm(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching films:", err);
      setError("Gagal memuat film.");
      setLoading(false);
    }
  };

  useEffect(() => {
    ambilFilm();
  }, []);

  if (loading) {
    return <p>Memuat film...</p>; // Tampilkan loading
  }

  if (error) {
    return <p>{error}</p>; // Tampilkan error
  }

  return <FilmView data={film} />; // Mengirim data film ke FilmView
};

export default Film;
