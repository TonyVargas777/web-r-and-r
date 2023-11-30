// ESTRUCTURA MONGO ATLAS
const { Schema, model } = require("mongoose");

const filmografiaSchema = Schema({
    tipo:{
        type: String,
        required: true
    },    
    titulo: {
        type: String,
        required: true
    },    
    tituloEn: {
        type: String,
        required: true
    },
    tituloCat: {
        type: String,
        required: true
    },
    urlPoster: {
        type: String,
        required: true
    },
    sinopsis: {
        type: String,
        required: true
    },
    sinopsisEn: {
        type: String,
        required: true
    },
    sinopsisCat: {
        type: String,
        required: true
    },
    linkImdb: {
        type: String,
        required: false
    },
    urlMakingOf: {
        type: String,
        required: false
    },
    urlYoutube: {
        type: String,
        required: false
    },
    plataformas: {
        type: String,
        required: false
    },
    fecha: {
        type: Number,
        required: false
    },
    duracion: {
        type: Number,
        required: false,
        default:0
    },
    genero: {
        type: String,
        required: true
    },
    generoEn: {
        type: String,
        required: true
    },
    generoCat: {
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    guionistas:{
        type: String,
        required: true
    },
    reparto: {
        type: String,
        required: false
    }
});

/* export default filmografiaSchema;
module.exports = model(filmografiaSchema, "filmografia"); */  
const Filmografia = model("Filmografia", filmografiaSchema);
module.exports = Filmografia;


