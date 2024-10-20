import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State untuk menyimpan nilai input pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Fungsi untuk mengirim pencarian
  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      console.log("Search Query:", searchQuery);
      // Anda bisa menggunakan pencarian ini untuk keperluan lain, misalnya fetch API atau navigasi
    }
  };

  return (
    <div className="navbar bg-base-100 bg-black text-red-700">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">walawee</Link>
      </div>
      <ul>
        <Link to="/" className="text-white-400">Home</Link>
        </ul>
      <div>
        <Link to="/" className="text-white-400">Rating</Link>
      </div>
      <div className="form-control">
        {/* Input pencarian */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
      <div className="flex-none">
        {/* Tombol untuk mengirim pencarian */}
        <button className="btn btn-square btn-ghost" onClick={handleSearchSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
