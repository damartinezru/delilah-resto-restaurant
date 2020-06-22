const entidadRespuestaApi = require("./entidadRespuestaApi");

exports.exitoso = (req, res, response, status) => {
  
    let result = new entidadRespuestaApi(true, response, [])
    res.status(status || 200).send(result);
  };
  
exports.error = (req, res, exception, status,log) => {
    console.log(log)
    let result= new entidadRespuestaApi(false, [], exception)
    res.status(status || 500).send(result);
  };
  