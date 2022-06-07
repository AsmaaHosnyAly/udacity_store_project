import { Application } from 'express';
import { verifyAuthToken } from '../../utils/jwtAuthentication'
import {index,show,create, destroy} from '../../controllers/productsController'

 const productRouter = (app: Application): void => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', verifyAuthToken, create);
    app.delete('/products/:id', verifyAuthToken, destroy);
  };

  export default productRouter;