class entidadPedido {
    constructor(data) {
        this.id = data.id,
        this.total_pedido = data.total_pedido,
        this.fecha_creacion = data.fecha_creacion,
        this.fecha_modificacion = data.fecha_modificacion,
        this.usuario_id = data.usuario_id,
        this.forma_pago = data.forma_pago,
        this.estado_id = data.estado_id
    }
}
module.exports = entidadPedido;