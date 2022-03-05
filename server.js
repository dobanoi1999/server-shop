require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const fileUpload = require("express-fileupload");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
const port = process.env.PORT || 8080;

app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/upload", require("./routes/uploadRoute"));
app.use("/api/cart", require("./routes/cartRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/history", require("./routes/historyRoute"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`server is running port ${port}`);
});

const URL = process.env.MONGOSE_URL;
mongoose.connect(
  URL,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err.message);
    console.log("mongoseDB is connected");
  }
);

module.exports = app;
