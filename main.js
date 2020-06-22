const express = require("express");
const app = express();
const ruta = require("./Configuracion/rutas");
const autenticacion = require("./Configuracion/autenticacion");
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

app.use(autenticacion.autenticarToken);

//! Esto debe ser lo ultimo siempre el enrutador y la disposicion del puerto
//El orden de los midlewares influye
ruta(app);
app.listen(3000, () => {
  console.log("corriendo");
});
