import { React, useState } from "react";
import axios from "axios";

function Formulario({ onAddFilm }) {
  const [tipo, setTipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [tituloEn, setTituloEn] = useState("");
  const [tituloCat, setTituloCat] = useState("");
  const [urlPoster, setUrlPoster] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [sinopsisEn, setSinopsisEn] = useState("");
  const [sinopsisCat, setSinopsisCat] = useState("");
  const [linkImdb, setLinkImdb] = useState("");
  const [urlMakingOf, setUrlMakingOf] = useState("");
  const [urlYoutube, setUrlYoutube] = useState("");
  const [plataformas, setPlataformas] = useState("");
  const [fecha, setFecha] = useState("");
  const [duracion, setDuracion] = useState("");
  const [genero, setGenero] = useState("");
  const [generoEn, setGeneroEn] = useState("");
  const [generoCat, setGeneroCat] = useState("");
  const [director, setDirector] = useState("");
  const [guionistas, setGuionistas] = useState("");
  const [reparto, setReparto] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar campos obligatorios
    const requiredFields = [
      "tipo",
      "titulo",
      "tituloEn",
      "tituloCat",
      "sinopsis",
      "sinopsisEn",
      "sinopsisCat",
      "genero",
      "generoEn",
      "generoCat",
      "director",
      "guionistas",
      "reparto",
    ];
    const errors = {};
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!eval(field)) {
        errors[field] = "Este campo es obligatorio";
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    // Enviar el formulario si no hay errores

    const filmToAdd = {
      tipo,
      titulo,
      tituloEn,
      tituloCat,
      urlPoster,
      sinopsis,
      sinopsisEn,
      sinopsisCat,
      linkImdb,
      urlMakingOf,
      urlYoutube,
      plataformas,
      fecha,
      duracion,
      genero,
      generoEn,
      generoCat,
      director,
      guionistas,
      reparto,
    };

    axios
      .post("http://localhost:3001/api/nuevaFilmografia", filmToAdd)
      .then((response) => {
        console.log(response.data);
        onAddFilm(response.data); // Envía la nueva película al componente principal
        setFormSubmitted(true);

        setTimeout(() => {
          resetForm();
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const resetForm = () => {
    // Restablecer todos los estados del formulario
    setTipo("");
    setTitulo("");
    setTituloEn("");
    setTituloCat("");
    setUrlPoster("");
    setSinopsis("");
    setSinopsisEn("");
    setSinopsisCat("");
    setLinkImdb("");
    setUrlMakingOf("");
    setUrlYoutube("");
    setPlataformas("");
    setFecha("");
    setDuracion("");
    setGenero("");
    setGeneroEn("");
    setGeneroCat("");
    setDirector("");
    setGuionistas("");
    setReparto("");

    setFormSubmitted(false); // Restablecer el estado de envío del formulario
  };

  return (
    <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white rounded-3xl mt-2 mb-2 w-5/6">
      {formSubmitted ? (
        <div>
          <p className="mt-10 bg-rojo-rodar rounded-3xl w-96 border-2 border-white">
            ¡Formulario enviado con éxito!
          </p>
        </div>
      ) : (
        <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white rounded-3xl mt-2  w-5/6">
          <h1 className="mt-10 bg-rojo-rodar rounded-3xl w-96 border-2 border-white">
            CREAR ARTÍCULO:
          </h1>

          <h1 className="m-10 underline">Formulario para crear un artículo:</h1>
          <form
            onSubmit={handleSubmit}
            className="pb-10 pr-10 pl-10 flex flex-col place-items-center w-2/3"
          >
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Tipo:
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
              >
                <option value="" className="max-w-lg mx-auto mt-8">
                  Selecciona un tipo:
                </option>
                <option value="pelicula">Película</option>
                <option value="serie">Serie</option>
                <option value="documental">Documental</option>
              </select>
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Título:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Español"
              />
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={tituloEn}
                onChange={(e) => setTituloEn(e.target.value)}
                placeholder="English"
              />
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={tituloCat}
                onChange={(e) => setTituloCat(e.target.value)}
                placeholder="Català"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              URL del póster:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={urlPoster}
                onChange={(e) => setUrlPoster(e.target.value)}
                placeholder="URL del póster"
              />
            </label>
            <br />
            <label className="block font-big text-red-700 text-red-500 w-full">
              Sinopsis:
              <textarea
                className="bg-red-50 border border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center "
                value={sinopsis}
                onChange={(e) => setSinopsis(e.target.value)}
                placeholder="Español"
              />
              <textarea
                className="bg-red-50 border border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                value={sinopsisEn}
                onChange={(e) => setSinopsisEn(e.target.value)}
                placeholder="English"
              />
              <textarea
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                value={sinopsisCat}
                onChange={(e) => setSinopsisCat(e.target.value)}
                placeholder="Català"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Link de IMDb:
              <input
                className="bg-red-50 border border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={linkImdb}
                onChange={(e) => setLinkImdb(e.target.value)}
                placeholder="Link de IMDb"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              URL del Making-Of:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={urlMakingOf}
                onChange={(e) => setUrlMakingOf(e.target.value)}
                placeholder="URL del Making-Of"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              URL de YouTube:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={urlYoutube}
                onChange={(e) => setUrlYoutube(e.target.value)}
                placeholder="URL de YouTube"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Plataformas:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={plataformas}
                onChange={(e) => setPlataformas(e.target.value)}
                placeholder="Plataformas"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Fecha:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="number"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                placeholder="Fecha"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Duración:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="number"
                value={duracion}
                onChange={(e) => setDuracion(e.target.value)}
                placeholder="Duración"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Género:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                placeholder="Español"
              />
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={generoEn}
                onChange={(e) => setGeneroEn(e.target.value)}
                placeholder="English"
              />
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={generoCat}
                onChange={(e) => setGeneroCat(e.target.value)}
                placeholder="Català"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Dirección:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                placeholder="Dirección"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Guión:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={guionistas}
                onChange={(e) => setGuionistas(e.target.value)}
                placeholder="Guión"
              />
            </label>
            <br />
            <label className="block   font-big text-red-700 text-red-500 w-full">
              Reparto:
              <input
                className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
                type="text"
                value={reparto}
                onChange={(e) => setReparto(e.target.value)}
                placeholder="Reparto"
              />
            </label>
            <br />
            <button
              className="m-10 bg-rojo-rodar rounded-xl border-2 border-white hover:bg-indigo-500 w-52 group-hover: transition ease-in duration-200 hover:text-black"
              type="submit"
            >
              ENVIAR
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Formulario;

/* import React from "react";
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
    <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white rounded-3xl mt-2  w-5/6 ">
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
export default Crear; */
