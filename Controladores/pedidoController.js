const express = require("express");
const router = express.Router();
const negocio = require("../Negocio/pedidoBL");
const respuesta = require("../Configuracion/respuestaApi");
const autenticacion = require("../Configuracion/autenticacion");

router.get("/obtenerPedido", (req, res) => {
  negocio
    .ObtenerPedido()
    .then((data) => {
      respuesta.exitoso(req, res, data, 200);
    })
    .catch((error) => {
      respuesta.error(req, res, "Error interno del servidor", 500, error);
    });
});

router.post("/agregarPedido", autenticacion.permisoAdmin, (req, res) => {
  negocio
    .GenerarFactura(req, res)
    .then((data) => {
      respuesta.exitoso(req, res, [], 201);
    })
    .catch((error) =>
      respuesta.error(req, res, "Error interno del servidor", 500, error)
    );
});

router.put("/editarPedido", autenticacion.permisoAdmin, (req, res) => {
  negocio
    .EditarPedido(req, res)
    .then((data) => {
      respuesta.exitoso(req, res, [], 200);
    })
    .catch((error) =>
      respuesta.error(req, res, "Error interno del servidor", 500, error)
    );
});

router.delete("/eliminarPedido", autenticacion.permisoAdmin, (req, res) => {
  negocio
    .EliminarPedido(req, res)
    .then(() => {
      respuesta.exitoso(req, res, [], 200);
    })
    .catch((error) =>
      respuesta.error(req, res, "Error interno del servidor", 500, error)
    );
});

module.exports = router;
