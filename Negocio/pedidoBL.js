const repositorio = require("../Repositorio/pedidoRepositorio");
const { reject } = require("bluebird");
const entidadPedido = require("../EntidadesComunes/entidadPedidoProducto");
const pedidoRepositorio = require("../Repositorio/pedidoRepositorio");



const AgregarPedidoProducto = (req,res) => {
    return new Promise((resolve,reject) => {
        resolve(repositorio.agregarPedidoProducto(req.body))
    });
}

const AgregarPedido = async (req,res) => {
    return new Promise((resolve, reject) => {
        resolve(repositorio.agregarPedido(req.body))
    });
}

const GenerarFactura = async (req,res) => {
    return new Promise(async (resolve, reject) => {
        let total = 0;
        const objetoInicial = {
            total_pedido: 0,
            fecha_creacion: new Date(),
            fecha_modificacion: null,
            usuario_id: req.body.usuario_id,
            estado_id: 1,
            forma_pago: req.body.forma_pago
        }
        let pedido = await AgregarPedido(objetoInicial);
    
        for(var i = 0; i<=req.body.productos; i++) {
            let producto = req.body.productos[i];
            let objPedidoProducto = {
                pedido_id: pedido.id,
                producto_id: producto.id
            }
            AgregarPedidoProducto(objPedidoProducto);
            total = total + producto.precio_unitario; 
        }
        const objPedidoNuevo = {
            total_pedido: total,
            fecha_creacion: pedido.fecha_creacion,
            fecha_modificacion: new Date(),
            usuario_id: req.body.usuario_id,
            estado_id: 2,
            forma_pago: req.body.forma_pago
        }
        const pedidoNuevo = await AgregarPedido(objPedidoNuevo);

        if(pedidoNuevo) {
            resolve(pedidoNuevo);
        } else {
            reject("No se pudo confirmar tu pedido");
        }
    });
} 

const ObtenerPedido = () => {
    return new Promise((resolve, reject) => {
        resolve(repositorio.obtenerPedido())
    })
}

const EditarPedido = (req,res) => {
    return new Promise((resolve,reject) => {
        resolve(repositorio.editarPedido(req.body))
    })
}

const EliminarPedido = (req,res) => {
    return new Promise((resolve,reject) => {
        resolve(repositorio.eliminarPedido(req.body))
    })
}

module.exports = {
    ObtenerPedido,
    EditarPedido,
    EliminarPedido,
    GenerarFactura,
    
}