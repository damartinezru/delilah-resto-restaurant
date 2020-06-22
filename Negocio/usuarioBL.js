const repositorio = require("../Repositorio/usuarioRepositorio");

const AgregarUsuario = (req, res) => {
    return new Promise((resolve, reject) => {
        resolve(repositorio.agregarUsuario(req.body))
    });
}

const ObtenerUsuario = (req,res) => {
    return new Promise((resolve, reject) => {
        resolve(repositorio.obtenerUsuario(req.body))
    })
}

module.exports = {
    AgregarUsuario,
    ObtenerUsuario
}