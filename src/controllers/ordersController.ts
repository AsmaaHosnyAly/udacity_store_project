import {  Request, Response } from 'express';
import { OrderStore } from '../models/order';


const orderModel = new OrderStore();

const create = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;
    const order = await orderModel.create(userId);
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;
    const order = await orderModel.updateStatus(userId);
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const active = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const order = await orderModel.getActiveOrder(userId);
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const completed = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const order = await orderModel.getCompletedOrders(userId);
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

export {create,update,active,completed}