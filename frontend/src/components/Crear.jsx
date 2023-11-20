import React from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Peticion } from "../helpers/Peticion";
import { Global } from "../helpers/Global";

const Crear = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");

  const guardarArticulo = async (e) => {
    e.preventDefault();
    let nuevoArticulo = formulario;

    const { datos } = await Peticion(
      Global.url + "crear",
      "POST",
      nuevoArticulo
    );

    if (datos.status === "success") {
      setResultado("guardado");

      const fileInput = document.querySelector("#file");

      if (fileInput) {
        const formData = new FormData();
        for (let i = 0; i < fileInput.files.length; i++) {
          formData.append("file" + i, fileInput.files[i]); // Append files with unique names
        }

        const subida = await Peticion(
          Global.url + "subir-imagen/" + datos.articulo._id, // Corrected URL
          "POST",
          formData,
          true
        );

        if (subida.datos.status === "success") {
          setResultado("guardado");
        } else {
          setResultado("error");
        }
      }
    } else {
      setResultado("error");
    }
  };

  return (
    <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white rounded-3xl mt-2 mb-2 w-5/6 ">
      <h1 className="mt-10 bg-rojo-rodar rounded-3xl w-96 border-2 border-white">Crear artículo:</h1>
      
      <h1 className="m-10 underline">Formulario para crear un artículo:</h1>

      <strong>
        {resultado === "guardado" ? "Artículo guardado con éxito" : ""}
      </strong>
      <strong>
        {resultado === "error" ? "Los datos son incorrectos" : ""}
      </strong>

      <form
        className="pb-10 pr-10 pl-10 flex flex-col place-items-center w-2/3"
        onSubmit={guardarArticulo}
      >
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="titulo">Título:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="titulo"
            onChange={cambiado}
          />
        </div>

        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="url_poster">URL Poster:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="url_poster"
            onChange={cambiado}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="sinopsis">Sinopsis:</label>
          <textarea
            className="text-black rounded text-center"
            type="text"
            name="sinopsis"
            onChange={cambiado}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="link_imdb">Link IMDB:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="link_imdb"
            onChange={cambiado}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="url_makingof">URL MakingOf:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="url_makingof"
            onChange={cambiado}
          />
          </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="url_youtube">URL Youtube:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="url_youtube"
            onChange={cambiado}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="plataformas">Plataformas:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="plataformas"
            onChange={cambiado}
          />
        </div>

        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="fecha">Fecha:</label>
          <input
            className="text-black rounded text-center"
            type="number"
            name="fecha"
            onChange={cambiado}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="duracion">Duración:</label>
          <input
            className="text-black rounded text-center"
            type="number"
            name="duracion"
            onChange={cambiado}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="genero">Género:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="genero"
            onChange={cambiado}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="reparto">Reparto:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="reparto"
            onChange={cambiado}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="equipo_tecnico">Equipo Técnico:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="equipo_tecnico"
            onChange={cambiado}
          />
        </div>
        <input
          type="submit"
          value="Guardar"
          className="m-10 bg-rojo-rodar rounded-xl border-2 border-white hover:bg-indigo-500 w-52 group-hover: transition duration-200 group-hover:duration-200 hover:text-black"
        />
      </form>
    </div>
  );
};
export default Crear;
