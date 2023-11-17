// ESTRUCTURA MONGO ATLAS
const { Schema, model } = require("mongoose");

const ArticuloSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    url_poster: {
        type: URL,
        required: true
    },
    sinopsis: {
        type: String,
        required: true
    },
    link_imdb: {
        type: URL,
        required: true
    },
    url_makingof: {
        type: URL,
        required: false
    },
    url_youtube: {
        type: URL,
        required: false
    },
    plataformas: {
        type: String,
        required: false
    },
    fecha: {
        type: Number,
        required: true
    },
    duracion: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    reparto: {
        type: String,
        required: true
    },
    equipo_tecnico: {
        type: String,
        required: true
    }
});

export default ArticuloSchema;
module.exports = model("Articulo", ArticuloSchema, "articulos");                    