const express = require('express');
const router = express.Router();
const negocio = require('../Negocio/usuarioBL');
const respuesta = require('../Configuracion/respuestaApi');
const autenticacion = require('../Configuracion/autenticacion');

router.get("/listaUsuarios", autenticacion.permisoAdmin,(req, res) => {
    negocio.ObtenerListaUsuarios().then(data => {
        respuesta.exitoso(req,res,data,200)
    }).catch(error => {
        return respuesta.error(req,res,error,500, error);
    });
});

router.post("/login",(req, res) => {
    negocio.ObtenerUsuario(req, res).then(data => {
        respuesta.exitoso(req,res,autenticacion.crearToken(data),200)
    }).catch(error => {
        return respuesta.error(req,res,error,401, error);
    });
});

router.post("/registro", (req,res) => {
    negocio.AgregarUsuario(req, res).then(data => {
        respuesta.exitoso(req,res,data,201)
    }).catch(error =>
        respuesta.error(req,res,error, 409, error));
});



module.exports = router