import mongoose from "mongoose";

interface Invoice {
  userId: string;
  products: [{ productId: string; amount: number }];
}

const invoiceSchema = new mongoose.Schema({
  userId: String,
  products: [{ productId: String, amount: Number }],
});

module.exports = mongoose.model("invoice", invoiceSchema);
