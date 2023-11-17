<<<<<<< HEAD
//crear conexion a la base de datos de mongo atlas
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/");

const app = express();
app.use(cors());

app.use(express.json());

// CONEXIÓN CON MONGODB VÍA MONGOOSE
mongoose.connect("mongodb+srv://", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "No se ha podido conectar con MongoDB:")
);
db.once("open", function () {
  console.log("Conexión correcta a la base de datos  de MongoDB");
=======
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/submit-form", (req, res) => {
  const formData = req.body;

  res.json({ success: true, message: "Formulario recibido correctamente." });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
>>>>>>> formulario_contacto_tony
});
