const contexto = require("./contexto");
const objEstado = require("../EntidadesComunes/entidadEstado");
const contextoEstado = new contexto();


const obtenerEstado = async () => {
    return contextoEstado.contextoBD.query('SELECT * FROM estado',
        {type: contextoEstado.contextoBD.QueryTypes.SELECT}
    ).then((resultado) => {
        return resultado;
    })
}

const agregarEstado = async entidadEstado => {
    let estado = new objEstado(entidadEstado);
    return contextoEstado.contextoBD.query('INSERT INTO estado(descripcion) VALUES (?)',
        {replacements:[estado.descripcion]})
    .then(() => {
        return `Estado ${estado.descripcion} guardado exitosamente`
    })
}

module.exports = {
    agregarEstado: agregarEstado,
    obtenerEstado: obtenerEstado
};

