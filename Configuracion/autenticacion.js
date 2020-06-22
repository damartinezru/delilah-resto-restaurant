const jwt = require("jsonwebtoken");
const firma = "delilah?user?resto";
const respuesta = require("../Configuracion/respuestaApi");
pathsAExcluir = ["/estado", "/usuario/registro", "/usuario/login", "/producto/obtenerProducto"];

const crearToken = (data) => {
        return jwt.sign(JSON.stringify(data[0]), firma);
};

const autenticarToken = (req,res,next) => {
    if(pathsAExcluir.find((path) => req.path === path )) {
        next();
    } else{
        try{
            if(req.headers.authorization) {
                const autorizacion = req.headers.authorization.split(' ')[1];
                const verificacion = jwt.verify(autorizacion, firma);
                try{
                    req.usuario = verificacion;
                    next();
                }catch(e){
                    return respuesta.error(req,res,"Error al autenticarte",'403', null);
                }
            } else {
                return respuesta.error(req,res,"No estas identificado",'401', null);
            }
        }catch(e) {
            return respuesta.error(req,res,"Error interno",'500',e);
        }
    }
};


const permisoAdmin = (req,res,next) => {
    try{
        if (req.usuario[0].es_admin === 1) {
            next();
        } else {
            return respuesta.error(req,res,"Acceso denegado",'403', null);
        }
    }catch(e){
        return respuesta.error(req,res,"Error interno",'500',e);
    }
}


module.exports = {
    crearToken,
    autenticarToken,
    permisoAdmin
};