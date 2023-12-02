const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Filmografia = require("./models/films.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://rodayrodar:bKoEtBq6ikRebHR6@atlascluster.6vz53bn.mongodb.net/filmografia?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "No se ha podido conectar con MongoDB:")
);
db.once("open", function () {
  console.log("Conexión correcta a la base de datos de MongoDB");
});

// Ruta para obtener todas las filmografías
/* app.get("/api/obtenerFilmografias", (req, res) => {
  Filmografia.find({})
    .then((documentos) => res.json(documentos))
    .catch((err) => res.json(err));
}); */
app.get("/api/obtenerFilmografias/:id", (req, res) => {
  console.log("Fetching filmography with ID:", req.params.id);
  Filmografia.findById(req.params.id)
    .then((filmografia) => {
      if (!filmografia) {
        return res.status(404).json({ error: "Filmography not found" });
      }
      res.json(filmografia);
    })
    .catch((err) => res.status(500).json({ error: "Internal Server Error" }));
});

// Ruta para agregar una nueva filmografía
app.post("/api/nuevaFilmografia", (req, res) => {
  const nuevaEntrada = new Filmografia(req.body);
  nuevaEntrada
    .save()
    .then((entrada) => res.json(entrada))
    .catch((err) => res.json(err));
});

// Ruta para actualizar una filmografía
app.put("/api/editarFilmografia/:id", (req, res) => {
  Filmografia.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((entradaActualizada) => res.json(entradaActualizada))
    .catch((err) => res.json(err));
});


app.delete("/api/eliminarFilmografia/:id", (req, res) => {
  Filmografia.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: "Entrada eliminada correctamente" }))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Conectado correctamente");
});