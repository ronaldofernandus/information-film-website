const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "Bioskop",
  })
})

//   const filmRoute = require("./film");
//   route.use("/films", filmRoute);

//   const jadwalRoute = require("./jadwal")
//   route.use('/jadwal', jadwalRoute)

  const kategoriRoute = require('./kategori')
  route.use('/kategori', kategoriRoute)


module.exports = route;





