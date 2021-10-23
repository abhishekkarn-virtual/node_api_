import express from "express";
import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
require("dotenv").config();
const app = express();
import cors from "cors";

const productRouter = require("./routes/products");
const userRoute = require("./routes/user");
const cartRouter = require("./routes/cart");
const invoiceRouter = require("./routes/invoice");

const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("DataBase Connection Successful!!"))
  .catch((err: any) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/products", productRouter);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRouter);
app.use("/api/invoice", invoiceRouter);

app.listen(process.env.port, () => {
  console.log(`Backend server is running on port ${process.env.PORT}!`);
});
