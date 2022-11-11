import { Request, Response } from "express";
import { Product } from "../models/product";

export const findAll = async (req: Request, res: Response) => {
  const { query } = req;
  const { sort, select, limit, skip } = query;

  let result = Product.find(query);

  if (typeof sort === "string") {
    result = result.sort(sort.split(",").join(" "));
  }

  if (typeof select === "string") {
    result = result.select(select.split(",").join(" "));
  }

  if (typeof skip === "string") {
    result = result.skip(Number(skip));
  }

  if (typeof limit === "string") {
    result = result.limit(Number(limit));
  }

  const products = await result;

  return res.json({ products, total: products.length });
};

export const create = async (req: Request, res: Response) => {
  return res.json(await Product.create(req.body));
};

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json(await Product.findById(id));
};

export const patch = async (req: Request, res: Response) => {
  const { id } = req.params;

  return res.json(
    await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
  );
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json(await Product.findByIdAndDelete(id));
};
