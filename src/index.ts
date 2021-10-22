import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors";

const productRoute = require("./routes/products");
const userRoute = require("./routes/user");
const cartRouter = require("./routes/cart");

const MONGO_URL =
  "mongodb+srv://abhishek%5Fknoxpo:%40Aabhishek04121998@cluster0.fygio.mongodb.net/Ecommerce_api?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("DataBase Connection Successful!!"))
  .catch((err: any) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/products", productRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRouter);

app.listen(3001, () => {
  console.log("Backend server is running on port 3000!");
});
