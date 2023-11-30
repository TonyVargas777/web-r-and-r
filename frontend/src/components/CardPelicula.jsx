import React from 'react';
import { Link } from 'react-router-dom';

const CardPelicula = ({ pelicula }) => {  
  const _id = pelicula._id || '';
  console.log('ID de la película:', _id);
  const {    
    titulo,
    director,
    duracion,
    reparto,
  } = pelicula;

  return (
    <div className="w-5/6 m-6 border rounded-l">
       <Link to={`/editar/${_id}`}>
        <img src={pelicula.urlPoster} alt={pelicula.titulo} />
      
      <div className="info-pelicula">
        <h3>{titulo}</h3>  
        <p>Dirección: {director}</p>
        <p>Duración: {duracion} minutos</p>
        {/* <p>Reparto: {reparto}</p> */}
      </div>
      </Link>
    </div>
  );
};

export default CardPelicula;