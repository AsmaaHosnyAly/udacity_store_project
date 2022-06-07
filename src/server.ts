import express, { Request, Response } from 'express';
import  productRouter  from './routes/api/product.route';
import  userRouter  from './routes/api/user.route';
import  orderRouter  from './routes/api/order.route';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes'


dotenv.config();


const app: express.Application = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:${PORT}`
  })
);

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});

app.use('/api',routes);

// Initialise all the routers
productRouter(app);
  userRouter(app);
orderRouter(app);

// test database

// test db
// client.connect().then(client=>{
//   return client.query('SELECT NOW()').then(res=>{
//     client.release();
//   console.log(res.rows)
//   }).catch(err=>{
//   client.release();
//   console.log(err.stack);
  
//   })
// })
app.listen(PORT, function () {
  console.log(`starting app on port ${PORT}`);
});

export default app;
