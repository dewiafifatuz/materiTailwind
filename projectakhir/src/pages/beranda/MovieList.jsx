import axios from "axios";
import React, { useEffect, useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data dari TMDB
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/week",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWFmZWE1OWQ0YjZmN2M1OTM5ZTkxNDY4OGViOWUzZCIsIm5iZiI6MTcyODUzNzQxOC4zMzAwOTYsInN1YiI6IjY3MDQ5YTk4NGIwYzViOWQ3MTY5YmI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nLZZww5rMOSF5g6XkxKlyZ8HOqteWqlNiGWSV2ThuLo",
            },
          }
        );
        const data = response.data;
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-6">Popular Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded-lg p-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
            <p className="text-gray-400">Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
