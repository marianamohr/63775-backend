const EErrors = require("../../services/errors/enum");

module.exports = (error, req, res, next) =>{
  if (error.cause) {
    console.log(error.cause);
  } else {
    console.log(error);
  }
  switch (error.code) {
    case EErrors.INVALID_TYPES_ERROR:
      res.status(400).send({ status: 'error', error: 'Algum campo não foi preenchido'});
      break
    default:
      res.send({ status: 'error', error: 'Erro interno do servidor'})
  }
}