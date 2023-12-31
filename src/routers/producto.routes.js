import express from "express";
import { GetAllProductos, GetProductById, AddProductos, UpdateProducto, DeleteProducto } from "../controllers/producto.controller";
import { Authenticate } from "../helpers/token.helpers";

const router = express.Router();

  //traernos todos los productos almacenados en la base de datos
router.get('/accesorio', GetAllProductos);

  //traer un producto por id
router.get('/accesorio/:id', GetProductById);  

  //creamos un producto nuevo
router.post('/accesorio', Authenticate, AddProductos)

  //modificar un producto por id
router.put('/accesorio/:id', Authenticate, UpdateProducto);

  //borrar un producto por id
router.delete('/accesorio/:id',Authenticate, DeleteProducto);

export default router