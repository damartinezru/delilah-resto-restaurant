const express = require('express');
const router = express.Router();
const negocio = require('../Negocio/usuarioBL');
const respuesta = require('../Configuracion/respuestaApi');
const autenticacion = require('../Configuracion/autenticacion');

router.post("/login",(req, res) => {
    negocio.ObtenerUsuario(req, res).then(data => {
        console.log(data);
        respuesta.exitoso(req,res,autenticacion.crearToken(data),200)
    }).catch(error => {
        respuesta.error(req, res, "Error interno del servidor", 500, error)
    });
});

router.post("/registro", (req,res) => {
    negocio.AgregarUsuario(req, res).then(data => {
        respuesta.exitoso(req,res,data,201)
    }).catch(error =>
        respuesta.error(req,res,"Error interno del servidor", 500, error));
});



module.exports = router