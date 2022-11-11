import express from "express";
import {
  create,
  findAll,
  findOne,
  patch,
  remove,
} from "../controllers/products";

export const productsRouter = express.Router();

productsRouter.get("/", findAll);
productsRouter.post("/", create);
productsRouter.get("/:id", findOne);
productsRouter.patch("/:id", patch);
productsRouter.delete("/:id", remove);
