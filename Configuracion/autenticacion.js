const jwt = require("jsonwebtoken");
const firma = "delilah?user?resto";
const respuesta = require("../Configuracion/respuestaApi");
pathsAExcluir = ["/estado", "/usuario/registro", "/usuario/login", "/producto/obtenerProducto"];

const crearToken = (data) => {
  return jwt.sign(JSON.stringify(data), firma);
};

const autenticarToken = (req,res,next) => {
    if(pathsAExcluir.find((path) => req.path === path )) {
        next();
    } else{
        try{
            if(req.headers.authorization) {
                let autorizacion = req.headers.authorization.split(' ')[1];
                const verificacion = jwt.verify(autorizacion, firma);
                try{
                    req.usuario = verificacion;
                     next();
                }catch(e){
                    return respuesta.error(req,res,"Error interno",'500', e);
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
        console.log(req);
        if (req.usuario.es_admin) {
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