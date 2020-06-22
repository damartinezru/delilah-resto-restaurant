class entidadProducto {
    constructor(data) {
        this.id = data.id
        this.descripcion = data.descripcion,
        this.precio_unitario = data.precio_unitario
    }
}
module.exports = entidadProducto;