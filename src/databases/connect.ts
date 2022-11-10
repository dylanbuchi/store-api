import mongoose from "mongoose";

export const connectToDatabase = (url: string) => mongoose.connect(url);
