const express = require('express');
const router = express.Router();
const negocio = require('../Negocio/productoBL');
const respuesta = require('../Configuracion/respuestaApi');
const autenticacion = require('../Configuracion/autenticacion');

router.get("/obtenerProducto",(req, res) => {
    negocio.ObtenerProducto().then(data => {
        console.log(data);
        respuesta.exitoso(req,res,data,200)
    }).catch(error => {
        respuesta.error(req, res, "Error interno del servidor", 500, error)
    });
});

router.post("/agregarProducto", autenticacion.autenticarToken, (req,res) => {
    negocio.AgregarProducto(req,res).then(data => {
        respuesta.exitoso(req,res,data,201)
    }).catch(error =>
        respuesta.error(req,res,"Error interno del servidor", 500, error));
});

module.exports = router