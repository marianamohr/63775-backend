const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "xablau"; // jamais faça isso

const generateToken = (user) => {
  delete user.password;
  if (user.name == "Mari") {
    user.role = "Admin";
  } else {
    user.role = "user";
  }

  const token = jwt.sign(user, PRIVATE_KEY, { expiresIn: "120" });
  return token;
};

// Middleware
const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send({ erroe: "Not authenticated" });
  }
  console.log(authHeader);

  const token = authHeader.split(" ")[1];
  jwt.verify(token, PRIVATE_KEY, (err, credentials) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ erro: "Not authorized" });
    }
    console.log("AAAAAAA", credentials);
    req.user = credentials;
    next();
  });
};

module.exports = {
  generateToken,
  authToken,
};
