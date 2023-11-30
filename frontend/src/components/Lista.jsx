import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Lista() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    // Fetch películas desde la base de datos y actualiza el estado
    axios.get("http://localhost:3001/api/obtenerFilmografias").then((response) => {
      setPeliculas(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white rounded-3xl mt-2 mb-2 w-5/6">
      <h1 className="mt-10 bg-rojo-rodar rounded-3xl w-96 border-2 border-white">
        Lista de Películas
      </h1>
      <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white rounded-3xl mt-2 w-5/6">
        {peliculas.map((pelicula) => (
          <Link
            to={`/editar/${pelicula._id}`}
            key={pelicula._id}
            className="m-4  rounded-xl border-2 border-white hover:bg-indigo-500 w-52 group-hover: transition ease-in duration-200 hover:text-black"
          >
            {pelicula.titulo} ({pelicula.fecha}) - {pelicula.director}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Lista;