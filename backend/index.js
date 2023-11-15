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
});
