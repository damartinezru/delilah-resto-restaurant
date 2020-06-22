const repositorio = require("../Repositorio/estadoRepositorio");

const AgregarEstado = (req,res) => {
    return new Promise((resolve, reject) => {
        resolve(repositorio.agregarEstado(req.body))
    });
}

const ObtenerEstado = () => {
    return new Promise((resolve, reject) => {
        resolve(repositorio.obtenerEstado())
    })
}

module.exports = {
    AgregarEstado,
    ObtenerEstado
}