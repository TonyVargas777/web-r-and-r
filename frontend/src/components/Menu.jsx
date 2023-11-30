import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white rounded-3xl pt-10 pb-16 mt-2 mb-2 w-1/2">
      <h1 className="mt-10 bg-rojo-rodar rounded-3xl w-96 border-2 border-white">
        Menú de Edición
      </h1>
      <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white rounded-3xl mt-2 w-5/6">
        <Link
          to="/formulario"
          className="m-4 mt-20 bg-blue-500 rounded-xl border-2 border-white hover:bg-indigo-500 w-52 group-hover: transition ease-in duration-200 hover:text-black"
        >
          1.- Ficha Nueva
        </Link>
        <Link
          to="/listadoPeliculas"
          className="m-4 mt-20 bg-blue-500 rounded-xl border-2 border-white hover:bg-indigo-500 w-52 group-hover: transition ease-in duration-200 hover:text-black"
        >
          2.- Editar Ficha Existente
        </Link>
      </div>
    </div>
  );
}

export default Menu;