const log = (req, res, next) => {
  console.log(`${new Date()} - Rota: ${req.path} - Método: ${req.method}`);
  req.xablau = "VAI BRASIL EH OURO NO FUTEBOL"
  next();
};

module.exports = log;
