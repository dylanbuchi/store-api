import { model, Schema } from "mongoose";
import { isRequiredMessage } from "../utilities/functions";
import { CompanyProduct } from "./enums/CompanyProduct";
import { IProduct } from "./interfaces/product";

const productsSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, isRequiredMessage("name")],
  },
  company: {
    type: String,
    enum: CompanyProduct,
    message: "{VALUE} is not supported!",
  },
  price: {
    type: Number,
    required: [true, isRequiredMessage("price")],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Product = model<IProduct>("Product", productsSchema);
