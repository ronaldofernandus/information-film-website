require("dotenv").config();
const express = require("express");
const route = express();
const port = process.env.PORT || 3000;

route.use(express.json());
route.use(express.urlencoded({ extended: true }));
route.use(express.static(__dirname + '/public'));

const routes = require("./routes");
route.use(routes);

route.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
