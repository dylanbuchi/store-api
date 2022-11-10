import dotenv from "dotenv";
dotenv.config();

export const settings = {
  port: Number(process.env.PORT) || 3500,
  dbUrl: process.env.DB_URL || "",
};
