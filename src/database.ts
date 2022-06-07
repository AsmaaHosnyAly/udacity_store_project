import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load the .env file's content into the process.env object
const {
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_DB_TEST,
    NODE_ENV,
    POSTGRES_PORT ,
    ENV
    } =process.env; // Destructuring the process.env object
console.log(ENV);


const Client = new Pool({
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: NODE_ENV === 'dev' ?  POSTGRES_DB :  POSTGRES_DB_TEST,
});



export default Client;
