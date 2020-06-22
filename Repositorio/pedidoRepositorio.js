const contexto = require("./contexto");
const objPedido = require("../EntidadesComunes/entidadPedido");
const objProductoPedido = require("../EntidadesComunes/entidadPedidoProducto");
const contextoPedido = new contexto();

const agregarPedidoProducto = async (entidadProductoPedido) => {
  let pedidoProducto = new objProductoPedido(entidadProductoPedido);
  return contextoPedido.contextoBD
    .query(
      "INSERT INTO pedido_producto(pedido_id,producto_id) VALUES (?,?)",
      { replacements: [pedidoProducto.pedido_id, pedidoProducto.producto_id] },
      { type: contextoPedido.contextoBD.QueryTypes.INSERT }
    )
    .then((resultado) => {
      return resultado;
    });
};

const agregarPedido = async (entidadPedido) => {
  let pedido = new objPedido(entidadPedido);
  return contextoPedido.contextoBD
    .query(
      "INSERT INTO pedido(total_pedido,fecha_creacion, fecha_modificacion, usuario_id, estado_id,forma_pago) VALUES (?,?,?,?,?,?)",
      {
        replacements: [
          pedido.total_pedido,
          pedido.fecha_creacion,
          pedido.fecha_modificacion,
          pedido.usuario_id,
          pedido.estado_id,
          pedido.forma_pago,
        ],
      },
      { type: contextoPedido.contextoBD.QueryTypes.INSERT }
    )
    .then((resultado) => {
      return `Pedido con orden ${resultado.id} generado exitosamente`;
    });
};

const obtenerPedido = async () => {
  return contextoPedido.contextoBD
    .query("SELECT * FROM pedido ORDER BY fecha_modificacion desc", {
      type: contextoPedido.contextoBD.QueryTypes.SELECT,
    })
    .then((resultado) => {
      return resultado;
    });
};

const editarPedido = async (entidadPedido) => {
  let pedido = new objPedido(entidadPedido);
  return contextoPedido.contextoBD
    .query(
      `UPDATE pedido SET total_pedido = ?,
        fecha_creacion = ?,
        fecha_modificacion = ?,
        usuario_id = ?,
        estado_id = ?,
        forma_pago = ?,
        WHERE id = ?`,
      {
        replacements: [
          pedido.total_pedido,
          pedido.fecha_creacion,
          pedido.fecha_modificacion,
          pedido.usuario_id,
          pedido.estado_id,
          pedido.forma_pago,
          pedido.id,
        ],
      },
      { type: contextoPedido.contextoBD.QueryTypes.UPDATE }
    )
    .then((resultado) => {
      return `Pedido con orden ${resultado.id} actualizado exitosamente`;
    });
};

const eliminarPedido = async (entidadPedido) => {
  let pedido = new objPedido(entidadPedido);
  return contextoPedido.contextoBD
    .query(
      `DELETE * FROM pedido WHERE id = ?`,
      { replacements: [pedido.id] },
      { type: contextoPedido.contextoBD.QueryTypes.DELETE }
    )
    .then((resultado) => {
      return resultado;
    });
};

module.exports = {
  agregarPedido,
  obtenerPedido,
  editarPedido,
  eliminarPedido,
  agregarPedidoProducto,
};
