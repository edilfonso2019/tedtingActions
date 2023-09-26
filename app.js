const express = require("express");
const app = express();
const port = 3000;

// Configuración para servir archivos estáticos desde la raíz
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
