import { Application,Router } from 'express';
import { verifyAuthToken } from '../../utils/jwtAuthentication'
import {index,show,create, authenticate,addProduct,removeProduct} from '../../controllers/usersController'
import * as controllers from '../../controllers/usersController'

const routes=Router();
// api users


 const userRouter = (app: Application): void => {
  app.get('/users', verifyAuthToken, index);
  app.get('/users/:id', verifyAuthToken, show);
  app.post('/users', verifyAuthToken, create);
  app.get('/auth', verifyAuthToken, authenticate);
  app.post('/users/:id/add-product-to-order', verifyAuthToken, addProduct);
  app.delete(
    '/users/:id/remove-product-from-order',
    verifyAuthToken,
    removeProduct
  );
  };
  export default userRouter;
  
 
 