const validateUser = (req, res, next) => {
  const { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    return res.status(400).json({ message: "Valores Invalidos" });
  }
  next();
};

module.exports = validateUser;
