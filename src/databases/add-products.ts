import { Product } from "../models/product";
import { connectToDatabase } from "./connect";
import { settings } from "../config/settings";
import { products } from "./products";

(async function run() {
  let hasError = false;
  try {
    await connectToDatabase(settings.dbUrl);
    console.log("Connected To the database");

    await Product.deleteMany({});
    console.log("Old products deleted!");

    await Product.create(products);
    console.log("New products created with success!");
  } catch (error) {
    console.log("🚀 ~ file: populate-data.ts ~ line 14 ~ run ~ error", error);
    hasError = true;
  } finally {
    process.exit(hasError ? 1 : 0);
  }
})();
