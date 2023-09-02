const User = require("../../models/User");
const Profile = require("../../models/Profile")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// login
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.status(200).json(createJWT(user));
  } catch (err) {
    res.status(400).json({ msg: err.message, reason: "Bad Credentials" });
  }
};
// create - signup #1
const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
};

// ** signing up **
const signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      throw new Error('Account already exists');
    } else {
      const newProfile = await Profile.create(req.body);
      req.body.profile = newProfile._id;
      const user = await User.create(req.body);
      const token = createJWT(user);
      res.status(200).json({ token });
    }
  } catch (err) {
    if (req.body.profile) {
      await Profile.findByIdAndDelete(req.body.profile);
    }
    res.status(500).json({ err: err.message });
  }
};

// profile
const checkAuth = (req, res, next) => {
  return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

module.exports = {
  create,
  login,
  checkAuth,
  signup,
};
