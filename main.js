const express = require("express");
const app = express();
const ruta = require("./Configuracion/rutas");
const autenticacion = require("./Configuracion/autenticacion");
const puerto = 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path);
  next();
});
app.use(autenticacion.autenticarToken);
ruta(app);
app.listen(puerto, () => {
  console.log(`¡Conexion exitosa!`)
  console.log(`La API esta corriendo actualmente en el puerto ${puerto}`);
});
