import mongoose from "mongoose";

interface Product {
  productId: string;
  title: string;
  description: string;
  amount: number;
}

const productSchema = new mongoose.Schema<Product>({
  productId: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: String,
  amount: { type: Number, required: true },
});

module.exports = mongoose.model<Product>("Product", productSchema);
