const express = require('express');
const router = express.Router();
const negocio = require('../Negocio/pedidoBL');
const respuesta = require('../Configuracion/respuestaApi');



router.get("/",(req, res) => {
    negocio.ObtenerPedido().then(data => {
        respuesta.exitoso(req,res,data,200)
    }).catch(error => {
        respuesta.error(req, res, "Error interno del servidor", 500, error)
    });
});

router.post("/", (req,res) => {
    negocio.GenerarFactura(req.body).then(data => {
        respuesta.exitoso(req,res,data,201)
    }).catch(error =>
        respuesta.error(req,res,"Error interno del servidor", 500, error));
});

router.put("/", (req,res) => {
    negocio.EditarPedido(req.body).then(data => {
        respuesta.exitoso(req,res,data,200)
    }).catch(error => 
        respuesta.error(req,res,"Error interno del servidor", 500, error))
});

module.exports = router