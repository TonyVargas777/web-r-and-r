import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useParams } from "react-router-dom";
import { Peticion } from "../helpers/Peticion";
import { Global } from "../helpers/Global";

const Editar = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");
  const [articulo, setArticulo] = useState({});
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, [params._id]);

  const conseguirArticulo = async () => {
    const { datos } = await Peticion(
      Global.url + "articulo/" + params.id,
      "GET"
    );
    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
  };

  const editarArticulo = async (e) => {
    e.preventDefault();
    let nuevoArticulo = formulario;

    const { datos } = await Peticion(
      Global.url + "articulo/" + params.id,
      "PUT",
      nuevoArticulo
    );

    if (datos.status === "success") {
      setResultado("guardado");
    } else {
      setResultado("error");
    }

    const fileInput = document.querySelector("#file");

    if (datos.status === "success" && fileInput[0]) {
      setResultado("guardado");

      const formData = new FormData();
      formData.append("file0", fileInput[0]);

      const subida = await Peticion(
        Global.url + "subir-imagen/" + datos.articulo,
        "POST",
        formData,
        true
      );
      console.log(datos.articulo);
      if (subida.datos.status === "success") {
        setResultado("guardado");
      } else {
        setResultado("error");
      }
    }
  };

  return (
    <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white py-2 px-4 border-white border-double rounded-3xl mt-2 w-2/3 ">
      <h1 className="mt-10 bg-rojo-rodar rounded-3xl border-2 border-white w-1/3">
        Editar artículo:
      </h1>
      <p className="m-10 underline">
        Formulario para editar el artículo: {articulo.titulo}
      </p>

      <strong>
        {resultado == "guardado" ? "Artículo guardado con éxito" : ""}
      </strong>
      <strong>{resultado == "error" ? "Los datos son incorrectos" : ""}</strong>

      <form
        className="pb-10 pr-10 pl-10 flex flex-col place-items-center w-2/3"
        onSubmit={editarArticulo}
      >
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="titulo">Título:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="titulo"
            onChange={cambiado}
            defaultValue={articulo.titulo}
          />
        </div>

        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="url_poster">Poster:</label>
          <div className="">
            {articulo.url_poster != "default.png" && (
              <img src={Global.url + "imagen/" + articulo.url_poster} />
            )}
            {articulo.url_poster == "default.png" && (
              <img src="https://res.cloudinary.com/dvoh9w1ro/image/upload/v1699034795/Logo_Rojo_-_Fondo_Negro_w4qob3.jpg" />
            )}
          </div>
          <input
            className="text-black rounded text-center"
            type="text"
            name="url_poster"
            id="url_poster"
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="sinopsis">Sinopsis:</label>
          <textarea
            className="text-black rounded text-center"
            type="text"
            name="sinopsis"
            onChange={cambiado}
            defaultValue={articulo.sinopsis}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="link_imdb">Link IMDB:</label>
          <input
            className="text-black rounded text-center"
            type="url"
            name="link_imdb"
            onChange={cambiado}
            defaultValue={articulo.link_imdb}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="url_makingof">URL Making Of:</label>
          <input
            className="text-black rounded text-center"
            type="url"
            name="url_makingof"
            onChange={cambiado}
            defaultValue={articulo.url_makingof}
          />
        </div>      
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="url_youtube">URL Youtube:</label>
          <input
            className="text-black rounded text-center"
            type="url"            name="url_youtube"
            onChange={cambiado}
            defaultValue={articulo.url_youtube}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="plataformas">Plataformas:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="plataformas"
            onChange={cambiado}
            defaultValue={articulo.plataformas}
          />
        </div>      
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="fecha">Fecha:</label>
          <input
            className="text-black rounded text-center"
            type="number"
            name="fecha"
            onChange={cambiado}
            defaultValue={articulo.fecha}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="duracion">Duración:</label>
          <input
            className="text-black rounded text-center"
            type="number"
            name="duracion"
            onChange={cambiado}
            defaultValue={articulo.duracion}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="genero">Género:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="genero"
            onChange={cambiado}
            defaultValue={articulo.genero}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="reparto">Reparto:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="reparto"
            onChange={cambiado}
            defaultValue={articulo.reparto}
          />
        </div>
        <div className="pb-10 pr-10 pl-10 flex flex-col w-full">
          <label htmlFor="equipo_tecnico">Equipo Técnico:</label>
          <input
            className="text-black rounded text-center"
            type="text"
            name="equipo_tecnico"
            onChange={cambiado}
            defaultValue={articulo.equipo_tecnico}
          />
        </div>

        <input
          type="submit"
          value="Guardar"
          className="m-10 bg-rojo-rodar rounded-xl border-2 border-white hover:bg-indigo-500 w-1/3 group-hover: transition duration-200 group-hover:duration-200 hover:text-black"
        />
      </form>
    </div>
  );
};
export default Editar;
