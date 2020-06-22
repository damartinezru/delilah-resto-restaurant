const express = require('express');
const router = express.Router();
const negocio = require('../Negocio/estadoBL');
const respuesta = require('../Configuracion/respuestaApi');

router.get("/",(req, res) => {
    negocio.ObtenerEstado().then(data => {
        console.log(data);
        respuesta.exitoso(req,res,data,200)
    }).catch(error => {
        respuesta.error(req, res, "Error interno del servidor", 500, error)
    });
});

router.post("/", (req,res) => {
    negocio.AgregarEstado(req.body).then(data => {
        respuesta.exitoso(req,res,data,201)
    }).catch(error =>
        respuesta.error(req,res,"Error interno del servidor", 500, error));
});

module.exports = router