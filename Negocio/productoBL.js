const repositorio = require("../Repositorio/productoRepositorio");

const AgregarProducto = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.agregarProducto(req.body));
  });
};

const ObtenerProducto = () => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.obtenerProducto());
  });
};

const EditarProducto = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.editarProducto(req.body));
  });
};

const EliminarProducto = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.eliminarProducto(req.params.id));
  });
};

module.exports = {
  AgregarProducto,
  ObtenerProducto,
  EditarProducto,
  EliminarProducto,
};
