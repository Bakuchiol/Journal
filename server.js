require("dotenv").config();
require("./config/database");
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
// const cors = require('cors')
const app = express();

// ************************ MIDDLEWARE **************
app.use(logger("dev"));
app.use(express.json());
// app.use(cors())

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
app.use(require('./config/checkToken'));

// ************************ PROTECTED ROUTES **************
// const ensureLoggedIn = require('./config/ensureLoggedIn')

// ************************ API ROUTES **************
app.use('/api/users', require('./routes/api/users'));
app.use('/api/entry', require('./routes/api/entry'))


// catch all
// app.get('/', (req,res) => {
//   res.sendStatus(200)
// })
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ************************ PORT ********************
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
