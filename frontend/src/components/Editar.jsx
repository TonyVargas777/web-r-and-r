import React, { useState } from "react";
import axios from "axios";

function Editar({ filmData, onUpdateFilm, onDeleteFilm }) {
  const [tipo, setTipo] = useState(filmData.tipo || "");
  const [titulo, setTitulo] = useState(filmData.titulo || "");
  const [tituloEn, setTituloEn] = useState(filmData.tituloEn || "");
  const [tituloCat, setTituloCat] = useState(filmData.tituloCat || "");
  const [urlPoster, setUrlPoster] = useState(filmData.urlPoster || "");
  const [sinopsis, setSinopsis] = useState(filmData.sinopsis || "");
  const [sinopsisEn, setSinopsisEn] = useState(filmData.sinopsisEn || "");
  const [sinopsisCat, setSinopsisCat] = useState(filmData.sinopsisCat || "");
  const [linkImdb, setLinkImdb] = useState(filmData.linkImdb || "");
  const [urlMakingOf, setUrlMakingOf] = useState(filmData.urlMakingOf || "");
  const [urlYoutube, setUrlYoutube] = useState(filmData.urlYoutube || "");
  const [plataformas, setPlataformas] = useState(filmData.plataformas || "");
  const [fecha, setFecha] = useState(filmData.fecha || "");
  const [duracion, setDuracion] = useState(filmData.duracion || "");
  const [genero, setGenero] = useState(filmData.genero || "");
  const [generoEn, setGeneroEn] = useState(filmData.generoEn || "");
  const [generoCat, setGeneroCat] = useState(filmData.generoCat || "");
  const [director, setDirector] = useState(filmData.director || "");
  const [guionistas, setGuionistas] = useState(filmData.guionistas || "");
  const [reparto, setReparto] = useState(filmData.reparto || "");

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedFilm = {
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
      .put(
        `http://localhost:3001/api/editarFilmografia/${filmData._id}`,
        updatedFilm
      )
      .then((response) => {
        console.log(response.data);
        onUpdateFilm(response.data); // Send the updated film data to the parent component
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/api/eliminarFilmografia/${filmData._id}`)
      .then(() => {
        onDeleteFilm(filmData._id); // Send the film ID to the parent component for deletion
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Editar Película:</h2>

      {urlPoster && (
        <img src={urlPoster} alt="Film Poster" style={{ maxWidth: "300px" }} />
      )}

      <form onSubmit={handleUpdate} className="max-w-lg mx-auto mt-8">
        <label>
          Tipo:
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="mx-8"
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
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            defaultValue={titulo}
          />
          <input
            type="text"
            value={tituloEn}
            onChange={(e) => setTituloEn(e.target.value)}
            defaultValue={tituloEn}
          />
          <input
            type="text"
            value={tituloCat}
            onChange={(e) => setTituloCat(e.target.value)}
            defaultValue={tituloCat}
          />
        </label>
        <br />
        <label>
          URL del póster:
          <input
            type="text"
            value={urlPoster}
            onChange={(e) => setUrlPoster(e.target.value)}
            defaultValue={urlPoster}
          />
        </label>
        <br />
        <label>
          Sinopsis:
          <textarea
            value={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
            defaultValue={sinopsis}
          />
          <textarea
            value={sinopsisEn}
            onChange={(e) => setSinopsisEn(e.target.value)}
            defaultValue={sinopsisEn}
          />
          <textarea
            value={sinopsisCat}
            onChange={(e) => setSinopsisCat(e.target.value)}
            defaultValue={sinopsisCat}
          />
        </label>
        <br />
        <label>
          Link de IMDb:
          <input
            type="text"
            value={linkImdb}
            onChange={(e) => setLinkImdb(e.target.value)}
            defaultValue={linkImdb}
          />
        </label>
        <br />
        <label>
          URL del Making-Of:
          <input
            type="text"
            value={urlMakingOf}
            onChange={(e) => setUrlMakingOf(e.target.value)}
            defaultValue={urlMakingOf}
          />
        </label>
        <br />
        <label>
          URL de YouTube:
          <input
            type="text"
            value={urlYoutube}
            onChange={(e) => setUrlYoutube(e.target.value)}
            defaultValue={urlYoutube}
          />
        </label>
        <br />
        <label>
          Plataformas:
          <input
            type="text"
            value={plataformas}
            onChange={(e) => setPlataformas(e.target.value)}
            defaultValue={plataformas}
          />
        </label>
        <br />
        <label>
          Fecha:
          <input
            type="number"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            defaultValue={fecha}
          />
        </label>
        <br />
        <label>
          Duración:
          <input
            type="number"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            defaultValue={duracion}
          />
        </label>
        <br />
        <label>
          Género:
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            defaultValue={genero}
          />
          <input
            type="text"
            value={generoEn}
            onChange={(e) => setGeneroEn(e.target.value)}
            defaultValue={generoEn}
          />
          <input
            type="text"
            value={generoCat}
            onChange={(e) => setGeneroCat(e.target.value)}
            defaultValue={generoCat}
          />
        </label>
        <br />
        <label>
          Dirección:
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            defaultValue={director}
          />
        </label>        
        <br />
        <label>
          Guión:
          <input
            type="text"
            value={guionistas}
            onChange={(e) => setGuionistas(e.target.value)}
            defaultValue={guionistas}
          />
        </label>
        <br />
        <label>
          Reparto:
          <input
            type="text"
            value={reparto}
            onChange={(e) => setReparto(e.target.value)}
            defaultValue={reparto}
          />
        </label>

        <button type="submit">Actualizar</button>
      </form>
      <br />

      <button onClick={handleDelete}>BORRAR FICHA</button>
    </div>
  );
}

export default Editar;

/* import React, { useEffect } from "react";
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
    <div className="flex flex-col font-bold place-items-center bg-azul-rodar text-white py-2 px-4 rounded-3xl mt-2 mb-2 w-5/6 ">
      <h1 className="mt-10 bg-rojo-rodar rounded-3xl border-2 border-white w-96">
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
          <img src={Global.url + "imagen/" + articulo.url_poster} />
          <input
            className="text-black rounded text-center"
            type="text"
            name="url_poster"
            onChange={cambiado}
            defaultValue={articulo.url_poster}
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
          className="m-10 bg-rojo-rodar rounded-xl border-2 border-white hover:bg-indigo-500 w-52 group-hover: transition duration-200 group-hover:duration-200 hover:text-black"
        />
      </form>
    </div>
  );
};
export default Editar; */
