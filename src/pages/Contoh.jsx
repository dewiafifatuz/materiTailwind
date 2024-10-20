import axios from "axios";
import React, { useEffect } from 'react'

const Contoh = () => {
  const ambilFilmTrending = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/collection?query=inside&",
      {
        method: "get",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWFmZWE1OWQ0YjZmN2M1OTM5ZTkxNDY4OGViOWUzZCIsIm5iZiI6MTcyODM1ODA4Mi45ODE2MDMsInN1YiI6IjY3MDQ5YTk4NGIwYzViOWQ3MTY5YmI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WYaioz111V3Mdbxj4yHelTa_2ndapBNmY2cWIJkcGF8",
        },
      }
    );

    const data = await response.data;
    console.log(data);
  };
  useEffect(() => {
    ambilFilmTrending();
  }, []);

  return <div>Contoh</div>;
};

export default Contoh;
