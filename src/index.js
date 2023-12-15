import express from 'express';
import morgan from  'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import connect from './db/db';
import productoRouter from './routers/producto.routes';
import userRouter from './routers/user.routes';

const app = express();
const PORT = process.env.PORT || 3030;
app.use(morgan('start'));
app.use(express.json());
app.use(cors());
dotenv.config();

connect();

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

// app.listen(parseInt(process.env.PORT), () => {
//   console.log('"Servidor ejecutandose en el puerto: " + process.env.PORT');
// });

app.use('/api', productoRouter); // Ruta base para el CRUD de los productos
app.use('/api', userRouter); // Ruta base para el CRUD de los usuarios