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
app.get("/api/obtenerFilmografias", (req, res) => {
  Filmografia.find({})
    .then((documentos) => res.json(documentos))
    .catch((err) => res.json(err));
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




/* //crear conexion a la base de datos de mongo atlas
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const filmografiaSchema = require("./models/User.js");

const app = express();
app.use(cors());

app.use(express.json());

// CONEXIÓN CON MONGODB VÍA MONGOOSE
mongoose.connect("mongodb+srv://rodayrodar:bKoEtBq6ikRebHR6@atlascluster.6vz53bn.mongodb.net/prueba", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "No se ha podido conectar con MongoDB Atlas:")
);
db.once("open", function () {
  console.log("Conexión correcta a la base de datos  de MongoDB Atlas");
}); */


//-------------------------------------------------------------------------------------

/* // Server-side code using Express.js and MongoDB driver

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://rodayrodar:bKoEtBq6ikRebHR6@atlascluster.6vz53bn.mongodb.net/prueba', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB model schema (assuming you have a 'Articulo' model)
const Articulo = mongoose.model('Articulo', {  your schema definition  });

// Endpoint to handle client requests
app.post('/guardarArticulo', async (req, res) => {
  try {
    const nuevoArticulo = new Articulo(req.body);
    await nuevoArticulo.save();
    res.status(201).json({ message: 'Articulo guardado correctamente' });
  } catch (error) {
    console.error('Error al guardar el articulo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); */





//--------------------------------------------------------------------------------------

/* const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");

// Inicializar app
console.log("App de node arrancada");

// Conectar a la base de datos
conexion();

// Crear servidor Node
const app = express();
const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json()); // recibir datos con content-type app/json
app.use(express.urlencoded({extended:true})); // form-urlencoded
app.set('view engine', 'pug');

// RUTAS
const rutas_articulo = require("./rutas/articulo");

// Cargo las rutas
app.use("/api", rutas_articulo);

app.get("/", (req, res) => {

    return res.status(200).send(
        "<h1>Empezando a crear un api rest con node</h1>"
    );

});

// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
}); */