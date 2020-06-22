const express = require("express");
const estado = require("../Controladores/estadoController");
const pedido = require("../Controladores/pedidoController");
const producto = require("../Controladores/productoController");
const usuario = require("../Controladores/usuarioController");

const rutas = server => {
    server.use("/estado",estado);
    server.use("/producto",producto);
    server.use("/pedido", pedido);
    server.use("/usuario", usuario);
}

module.exports = rutas;