import { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import { createAuthToken, verifyAuthToken } from '../utils/jwtAuthentication';

const userModel = new UserStore();

const index = async (req: Request, res: Response) => {
  try {
    const users = await userModel.index();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};



const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userModel.show(id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const create = async (req: Request, res: Response) => {
  const userInfo: User = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password
  };
  try {
    const user = await userModel.create(userInfo);
    const token = createAuthToken(user.username);
    res.json(token);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const authenticate = async (req: Request, res: Response) => {
  try {
    const user = await userModel.authenticate(req.body.username, req.body.password);
    if (user) {
      const token = createAuthToken(user.username);
      res.json(token);
    } else {
      res.send('Invalid username and/or password');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const addProduct = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    const { productId, quantity } = req.body;
    const orderDetails = await userModel.addProductToOrder(
      userId,
      productId,
      quantity
    );
    res.json(orderDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};

const removeProduct = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    const productId = req.body.productId;
    const orderDetails = await userModel.removeProductFromOrder(userId, productId);
    res.json(orderDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`${err.message}`);
  }
};


export {
  index,
  show ,
  create,
  authenticate,
  addProduct,
   removeProduct,
}
