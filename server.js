const express = require("express");
const dbConfig = require("./app/config/db.config.js");
const cors = require("cors");
const db = require("./app/models");
var pgtools = require('pgtools');
const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */


try {
 pgtools.createdb({
    user:  dbConfig.USER,
    password: dbConfig.PASSWORD,
    port: 5432,
    host: dbConfig.HOST
  }, 'testdb', function (err, res) {
    db.sequelize.sync();
  });
 
} catch (error) {
  console.log('error: ', error);
}
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/producto.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
