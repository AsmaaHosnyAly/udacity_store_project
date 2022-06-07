
import { Application } from 'express';
import { verifyAuthToken } from '../../utils/jwtAuthentication'
import {create,update,active, completed} from '../../controllers/ordersController'


const  orderRouter = (app: Application): void => {
    app.post('/orders', verifyAuthToken, create);
    app.put('/orders', verifyAuthToken, update);
    app.get('/orders/users/:userId/active', verifyAuthToken, active);
    app.get('/orders/users/:userId/completed', verifyAuthToken, completed);
  };

  export default orderRouter;
  