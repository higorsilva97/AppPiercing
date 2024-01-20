const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization.split(" ")[1];

  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" });
    }

    // O token é válido, e 'decoded' contém as informações do payload
    req.usuario = decoded;
    
    next();
  });
}

module.exports = verificarToken;
