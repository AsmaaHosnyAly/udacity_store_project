import {  Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';


const productModel = new ProductStore();

const index = async (req: Request, res: Response) => {
  try {
    const products = await productModel.index();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await productModel.show(id);
    res.json(product);
     
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const productInfo: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      rating: req.body.rating
    };
    const product = await productModel.create(productInfo);
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await productModel.delete(id);
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};


export {index,show,create, destroy};