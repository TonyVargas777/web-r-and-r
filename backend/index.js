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
});
