import mongoose from "mongoose";

interface User {
  userId: string;
  name: string;
}

const userSchema = new mongoose.Schema<User>({
  userId: { type: String, unique: true, required: true, minlength: 6 },
  name: { type: String, required: true },
});

module.exports = mongoose.model<User>("User", userSchema);
