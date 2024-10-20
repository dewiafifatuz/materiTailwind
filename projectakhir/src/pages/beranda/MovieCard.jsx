// MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, rating, onRatingChange }) => {
  return (
    <div className="min-w-[200px] shadow-lg rounded-lg">
      <Link to={`/detail/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover rounded-t-lg cursor-pointer"
        />
        <h3 className="text-center text-xl font-bold truncate p-2 hover:text-red-500">
          {movie.title}
        </h3>
      </Link>

      {/* Bagian Rating */}
      <div className="join">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`join-item btn ${rating >= star ? "btn-active" : ""}`}
            onClick={() => onRatingChange(movie.id, star)} // Handle perubahan rating
          >
            {star} ★
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;