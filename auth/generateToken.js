const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");

module.exports = (user) => {
    const payload = {
        id: user.id,
        username: user.username
    };

    const secret = "this is a super secret";

    const options = { expiresIn: '1d' };


    return jwt.sign(payload, jwtSecret, options);
};