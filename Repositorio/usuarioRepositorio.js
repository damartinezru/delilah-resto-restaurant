const contexto = require("./contexto");
const objUsuario = require("../EntidadesComunes/entidadUsuario");
const contextoUsuario = new contexto();



const obtenerUsuario = async entidadUsuario => {
    let usuario = new objUsuario(entidadUsuario);
    return contextoUsuario.contextoBD.query(`SELECT * FROM usuario WHERE login = ? AND contrasena = ?`,
        {replacements: [usuario.login, usuario.contrasena]},
        {type: contextoUsuario.contextoBD.QueryTypes.SELECT}
    ).then((resultado) => {
        return resultado;
    })
}

const agregarUsuario = async entidadUsuario => {
    let usuario = new objUsuario(entidadUsuario);
    return contextoUsuario.contextoBD.query('INSERT INTO usuario(nombre,apellido,correo,login,contrasena,telefono,direccion,pais,ciudad,es_admin) VALUES (?,?,?,?,?,?,?,?,?,?)',
        {replacements:[usuario.nombre, usuario.apellido, usuario.correo, usuario.login, usuario.contrasena,usuario.telefono, usuario.direccion, usuario.pais,usuario.ciudad, usuario.es_admin]})
    .then(() => {
        return `Usuario guardado exitosamente`
    })
}

module.exports = {
    agregarUsuario ,
    obtenerUsuario
};

