class entidadUsuario {
    constructor(data) {
        this.nombre = data.nombre,
        this.apellido = data.apellido,
        this.correo = data.correo,
        this.login = data.login,
        this.contrasena = data.contrasena,
        this.telefono = data.telefono,
        this.direccion = data.direccion,
        this.pais = data.pais, 
        this.ciudad = data.ciudad,
        this.es_admin = data.es_admin
       }
        
}

module.exports = entidadUsuario;