const repositorio = require("../Repositorio/productoRepositorio");

const AgregarProducto = (req,res) => {
    return new Promise((resolve, reject) => {
        resolve(repositorio.agregarProducto(req.body))
    });
}

const ObtenerProducto = () => {
    return new Promise((resolve, reject) => {
        resolve(repositorio.obtenerProducto())
    })
}

module.exports = {
    AgregarProducto,
    ObtenerProducto
}