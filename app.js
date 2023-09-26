const express = require("express");
const app = express();
const path = require("path");

// Configura la ruta raíz para servir el archivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Otras rutas y configuraciones de tu aplicación

// Inicia el servidor en un puerto específico
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
