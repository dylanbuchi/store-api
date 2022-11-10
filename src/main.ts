import express, { Request, Response } from "express";

import { settings } from "./config/settings";
import { connectToDatabase } from "./databases/connect";

class App {
  constructor(private app = express()) {
    app.use(express.json());
    app.get("/", (req: Request, res: Response) => {
      res.send("API is running");
    });
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
