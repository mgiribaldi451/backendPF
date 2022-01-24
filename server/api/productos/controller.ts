import { NextFunction, query, Request, Response } from "express";
import services from "./services";
import Productos from "../../interfaces/productos";

async function getProducts(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await services.getProducts();
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function getProductId(req: Request,res: Response, next: NextFunction) {
  try {
    
    console.log(req.params.id)
    const data = await services.getProductsId(parseInt(req.params.id));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function postProducts(req: Request,res: Response, next: NextFunction) {
  try {
    const saveProduct: Productos = req.body;
    console.log(saveProduct);
    
    const data = await services.postProducts(saveProduct);
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function putProducts(req: Request,res: Response, next: NextFunction) {
  try {
    const saveProduct: Productos = req.body;
    const data = await services.putProducts(parseInt(req.params.id),saveProduct );
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function deleteProducts(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await services.deleteProducts(parseInt(req.params.id));
    //const data = await services.deleteProducts();
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

export default { getProducts, deleteProducts, postProducts, putProducts,getProductId };