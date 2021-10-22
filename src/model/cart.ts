import mongoose from "mongoose";

interface Cart {
  userId: string;
  products: [{ id: string; dateAdded: Date }];
}

const cartSchema = new mongoose.Schema<Cart>({
  userId: { type: String, unique: true, required: true },
  products: [{ id: String, dateAdded: { type: Date, default: Date.now } }],
});

module.exports = mongoose.model<Cart>("Cart", cartSchema);
