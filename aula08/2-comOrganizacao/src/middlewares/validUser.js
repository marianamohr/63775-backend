const validUser = (req, res, next) => {
   if (!req.body.name || !req.body.sobrenome || !req.body.idade || !req.body.curso) {
   return res.status(404).json({message: "Dados invalidos"})
   }
    next();
  };
  
  module.exports = validUser;
  