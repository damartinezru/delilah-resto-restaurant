const repositorio = require("../Repositorio/pedidoRepositorio");

const AgregarPedidoProducto =  (obj) => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.agregarPedidoProducto(obj));
  });
};

const AgregarPedido = async (obj) => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.agregarPedido(obj));
  });
};

const GenerarFactura = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    let total = 0;
    const objetoInicial = {
      total_pedido: 0,
      fecha_creacion: new Date(),
      fecha_modificacion: null,
      usuario_id: req.body.usuario_id,
      estado_id: 1,
      forma_pago: req.body.forma_pago,
    };
    const pedido = await AgregarPedido(objetoInicial);
    try{
        for (var i = 0; i <= req.body.productos.length; i++) {
            let producto = req.body.productos[i];
            let objPedidoProducto = {
              pedido_id: pedido[0],
              producto_id: producto.id,
            };
            AgregarPedidoProducto(objPedidoProducto);
            total = total + producto.precio_unitario;
          }
    }catch(e){
    }

    const objPedidoNuevo = {
      id: pedido[0],
      total_pedido: total,
      fecha_creacion: objetoInicial.fecha_creacion,
      fecha_modificacion: new Date(),
      usuario_id: req.body.usuario_id,
      estado_id: 2,
      forma_pago: req.body.forma_pago,
    };
    resolve(repositorio.editarPedido(objPedidoNuevo));


  });
};

const ObtenerPedido = () => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.obtenerPedido());
  });
};

const EditarPedido = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.editarPedido(req.body));
  });
};

const EliminarPedido = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve(repositorio.eliminarPedido(req.body));
  });
};

module.exports = {
  ObtenerPedido,
  EditarPedido,
  EliminarPedido,
  GenerarFactura,
};
