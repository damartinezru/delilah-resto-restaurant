const repositorio = require("../Repositorio/usuarioRepositorio");

const AgregarUsuario = async (req, res) => {
  const verificacionExistencia = await repositorio.obtenerUsuario(req.body);
  return new Promise((resolve, reject) => {
    if (verificacionExistencia[0].length > 0) {
      reject("Usuario ya existente");
    } else {
      resolve(repositorio.agregarUsuario(req.body));
    }
  });
};

const ObtenerUsuario = async (req, res) => {
  const usuario = await repositorio.obtenerUsuario(req.body);
  return new Promise((resolve, reject) => {
    if (usuario[0].length > 0) {
      resolve(usuario);
    } else {
      reject("Usuario no registrado");
    }
  });
};

const ObtenerListaUsuarios = () => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.obtenerListaUsuarios());
  });
};

module.exports = {
  AgregarUsuario,
  ObtenerUsuario,
  ObtenerListaUsuarios
};
