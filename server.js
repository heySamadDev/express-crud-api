const express = require("express");
const productRoutes = require("./routes/productRoutes.js");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Sever is listening on PORT: 3000");
});
