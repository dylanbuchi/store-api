import express from "express";

import { settings } from "./config/settings";
import { connectToDatabase } from "./databases/connect";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import { notFoundMiddleware } from "./middleware/not-found";
import { productsRouter } from "./routes/products";

class App {
  constructor(private app = express()) {
    app.use(express.json());

    app.use("/api/v1/products", productsRouter);
    app.use(errorHandlerMiddleware);
    app.use(notFoundMiddleware);
  }

  async run() {
    try {
      await connectToDatabase(settings.dbUrl);
      console.log("Connected to the database.");
      this.app.listen(settings.port, () => {
        console.log(`Server is running on port: ${settings.port}.`);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

new App().run();
