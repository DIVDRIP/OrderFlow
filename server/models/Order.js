import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    address: String,
    status: {
      type: String,
      enum: ["Pending", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);