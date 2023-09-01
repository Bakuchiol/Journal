const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// login
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error(); // This means that no user with those credentials were ever created... throw error
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error(); // Using bcrypt, we're gonna compare passwords (hash) from the user input and the database. If those two are the same, then match is true. If false, throw error.
    res.status(200).json(createJWT(user)); // Once credentials true, then json the user for the entirity of the session, exprires in 24h
  } catch (err) {
    res.status(400).json({ msg: err.message, reason: "Bad Credentials" });
  }
};
// create
const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
};

// profile
const checkAuth = (req, res, next) => {
  return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

module.exports = {
  create,
  login,
  checkAuth,
};
