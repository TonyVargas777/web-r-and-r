import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPelicula from './CardPelicula'; 

const ListadoPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    // Lógica para obtener las películas desde la base de datos
    axios.get('http://localhost:3001/api/obtenerFilmografias')
      .then((response) => {
        setPeliculas(response.data); // Supongamos que la respuesta contiene un array de objetos representando películas
      })
      .catch((error) => {
        console.error('Error al obtener las películas', error);
      });
  }, []);

  return (
    <div>
    <div className="w-5/6 flex flex-col border bg-azul-rodar text-white font-bold py-2 px-4 rounded-3xl mt-2 mb-2">
      <h2 className="text-center mb-4">LISTADO ACTUALIZADO</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {peliculas.map((pelicula) => (
          <CardPelicula key={pelicula._id} pelicula={pelicula}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ListadoPeliculas;