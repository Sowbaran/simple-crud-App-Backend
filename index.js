const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routers/product.route");

router.app.use(express.json());

app.use("/api/products", router);
app.get("/", function (req, res) {
  res.json("Hello From node api server");
});

mongoose
  .connect(
    "mongodb+srv://AdminSow:5x6rjpRE8mN6okQX@backenddb.2r7baf8.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");

    app.listen(3000, () => {
      console.log("Server is running on the port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
