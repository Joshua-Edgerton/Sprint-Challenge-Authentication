const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(req.headers.token)

  if (token){
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(403).json({ message: "That authorization token is invalid.", err });
        } else {
          req.decodedToken = decodedToken;
          next();
        };
    });
  } else {
    res.status(401).json({ message: "This resource requires an authorization token to access." });
  };
};
