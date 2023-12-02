import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Editar({ onUpdateFilm, onDeleteFilm }) {
  const { id } = useParams();

  const [filmData, setFilmData] = useState({
    _id: "",
    tipo: "",
    titulo: "",
    tituloEn: "",
    tituloCat: "",
    urlPoster: "",
    sinopsis: "",
    sinopsisEn: "",
    sinopsisCat: "",
    linkImdb: "",
    urlMakingOf: "",
    urlYoutube: "",
    plataformas: "",
    fecha: "",
    duracion: "",
    genero: "",
    generoEn: "",
    generoCat: "",
    director: "",
    guionistas: "",
    reparto: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/obtenerFilmografias/${id}`
        );
        setFilmData(response.data);
      } catch (error) {
        console.error("Error fetching filmography:",error);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3001/api/editarFilmografia/${filmData._id}`,
        filmData
      );
      onUpdateFilm(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:3001/api/eliminarFilmografia/${filmData._id}`
      );
      onDeleteFilm(filmData._id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col font-bold place-items-center bg-transparent text-white rounded-3xl h-5/6 mt-2 w-5/6">
      <div className="w-11/12 flex flex-col place-items-center border bg-azul-rodar text-white font-bold py-2 px-4 rounded-3xl mt-2 mb-2">
        <h2 className="mt-10 bg-rojo-rodar rounded-3xl w-96 border-2 border-white">
          Editar Película:
        </h2>

        {filmData.urlPoster && (
          <img
            src={filmData.urlPoster}
            alt="Film Poster"
            style={{ maxWidth: "300px" }}
          />
        )}

        <h1 className="m-10 underline">Formulario para EDITAR un artículo:</h1>
        <form
          onSubmit={handleUpdate}
          className="pb-10 pr-10 pl-10 flex flex-col place-items-center w-2/3"
        >
          <label className="block font-big text-red-700 text-red-500 w-full">
            Tipo:
            <select
              value={filmData.tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="bg-red-50 border border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            >
              <option value="" className="max-w-lg mx-auto mt-8">
                Selecciona un tipo:
              </option>
              <option value="pelicula">Pelicula</option>
              <option value="serie">Serie</option>
              <option value="documental">Documental</option>
            </select>
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Título:
            <input
              type="text"
              /* value={filmData.titulo} */
              onChange={(e) => setTitulo(e.target.value)}
              defaultValue={filmData.titulo}
              className="bg-red-50 border mb-2 border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
            <input
              type="text"
              /* value={filmData.tituloEn} */
              onChange={(e) => setTituloEn(e.target.value)}
              defaultValue={filmData.tituloEn}
              className="bg-red-50 border mb-2 border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
            <input
              type="text"
              /* value={filmData.tituloCat} */
              onChange={(e) => setTituloCat(e.target.value)}
              defaultValue={filmData.tituloCat}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            URL del póster:
            <input
              type="text"
              /* value={filmData.urlPoster} */
              onChange={(e) => setUrlPoster(e.target.value)}
              defaultValue={filmData.urlPoster}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Sinopsis:
            <textarea
              /* value={filmData.sinopsis} */
              onChange={(e) => setSinopsis(e.target.value)}
              defaultValue={filmData.sinopsis}
              className="bg-red-50 border mb-2 border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
            <textarea
              /* value={filmData.sinopsisEn} */
              onChange={(e) => setSinopsisEn(e.target.value)}
              defaultValue={filmData.sinopsisEn}
              className="bg-red-50 border mb-2 border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
            <textarea
              /* value={filmData.sinopsisCat} */
              onChange={(e) => setSinopsisCat(e.target.value)}
              defaultValue={filmData.sinopsisCat}
              className="bg-red-50 border border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Link de IMDb:
            <input
              type="text"
              /* value={filmData.linkImdb} */
              onChange={(e) => setLinkImdb(e.target.value)}
              defaultValue={filmData.linkImdb}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            URL del Making-Of:
            <input
              type="text"
              /* value={filmData.urlMakingOf} */
              onChange={(e) => setUrlMakingOf(e.target.value)}
              defaultValue={filmData.urlMakingOf}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            URL de YouTube:
            <input
              type="text"
              /* value={filmData.urlYoutube} */
              onChange={(e) => setUrlYoutube(e.target.value)}
              defaultValue={filmData.urlYoutube}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Plataformas:
            <input
              type="text"
              /* value={filmData.plataformas} */
              onChange={(e) => setPlataformas(e.target.value)}
              defaultValue={filmData.plataformas}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Fecha:
            <input
              type="number"
              /* value={filmData.fecha} */
              onChange={(e) => setFecha(e.target.value)}
              defaultValue={filmData.fecha}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Duración:
            <input
              type="number"
              /* value={filmData.duracion} */
              onChange={(e) => setDuracion(e.target.value)}
              defaultValue={filmData.duracion}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Género:
            <input
              type="text"
              /* value={filmData.genero} */
              onChange={(e) => setGenero(e.target.value)}
              defaultValue={filmData.genero}
              className="bg-red-50 border mb-2 border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
            <input
              type="text"
              /* value={filmData.generoEn} */
              onChange={(e) => setGeneroEn(e.target.value)}
              defaultValue={filmData.generoEn}
              className="bg-red-50 border mb-2 border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
            <input
              type="text"
              /* value={filmData.generoCat} */
              onChange={(e) => setGeneroCat(e.target.value)}
              defaultValue={filmData.generoCat}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Dirección:
            <input
              type="text"
              /* value={filmData.director} */
              onChange={(e) => setDirector(e.target.value)}
              defaultValue={filmData.director}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Guión:
            <input
              type="text"
              /* value={filmData.guionistas} */
              onChange={(e) => setGuionistas(e.target.value)}
              defaultValue={filmData.guionistas}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>
          <br />
          <label className="block font-big text-red-700 text-red-500 w-full">
            Reparto:
            <input
              type="text"
              /* value={filmData.reparto} */
              onChange={(e) => setReparto(e.target.value)}
              defaultValue={filmData.reparto}
              className="bg-red-50 border  border-red-500 w-full text-red-900 placeholder-red-700 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400 text-center"
            />
          </label>

          <button
            className="m-10 bg-rojo-rodar rounded-xl border-2 border-white hover:bg-indigo-500 w-52 group-hover: transition ease-in duration-200 hover:text-black"
            type="submit"
          >
            ACTUALIZAR
          </button>
        </form>
        <br />

        <button
          className="m-05 bg-rojo-rodar rounded-xl border-2 border-white hover:bg-indigo-500 w-52 group-hover: transition ease-in duration-200 hover:text-black"
          onClick={handleDelete}
        >
          BORRAR FICHA
        </button>
      </div>
    </div>
  );
}

export default Editar;
