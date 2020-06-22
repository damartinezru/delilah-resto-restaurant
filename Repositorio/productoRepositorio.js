const contexto = require("./contexto");
const objProducto = require("../EntidadesComunes/entidadProducto");
const contextoProducto = new contexto();

const agregarProducto = async (entidadProducto) => {
  let producto = new objProducto(entidadProducto);
  return contextoProducto.contextoBD
    .query(
      "INSERT INTO producto(descripcion,precio_unitario) VALUES (?,?)",
      {
        replacements: [producto.descripcion, producto.precio_unitario],
      },
      { type: contextoProducto.contextoBD.QueryTypes.INSERT }
    )
    .then(() => {
      return `Producto ${producto.descripcion} guardado exitosamente`;
    });
};
const obtenerProducto = (async) => {
  return contextoProducto.contextoBD
    .query("SELECT * FROM producto", {
      type: contextoProducto.contextoBD.QueryTypes.SELECT,
    })
    .then((resultado) => {
      return resultado;
    });
};

const editarProducto = async (entidadProducto) => {
  let producto = new objProducto(entidadProducto);
  return contextoProducto.contextoBD.query(
    "UPDATE producto SET descripcion = ?, precio_unitario = ? ",
    {
      replacements: [producto.descripcion, producto.precio_unitario],
    },
    { type: contextoProducto.contextoBD.QueryTypes.UPDATE }
  );
};

const eliminarProducto = async (entidadProducto) => {
  let producto = new objProducto(entidadProducto);
  return contextoProducto.contextoBD.query(
    "DELETE FROM producto WHERE id = ?",
    {
      replacements: [producto.id],
    },
    { type: contextoProducto.contextoBD.QueryTypes.DELETE }
  );
};

module.exports = {
  agregarProducto,
  obtenerProducto,
  editarProducto,
  eliminarProducto,
};
