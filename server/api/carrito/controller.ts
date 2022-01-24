import { NextFunction, query, Request, Response } from "express";
import services from "./services";
import Carro from "../../interfaces/carro";

async function getCart(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await services.getCart();
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function getCartId(req: Request,res: Response, next: NextFunction) {
  try {
    
    console.log(req.params.id)
    const data = await services.getCartId(parseInt(req.params.id));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function postCart(req: Request,res: Response, next: NextFunction) {
  try {
    const saveCart: Carro = req.body;
    console.log(saveCart);
    
    const data = await services.postCart(saveCart);
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function putCart(req: Request,res: Response, next: NextFunction) {
  try {
    const saveCart: Carro = req.body;
    const data = await services.putCart(parseInt(req.params.id),saveCart );
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function deleteCart(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await services.deleteCart(parseInt(req.params.id));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function deleteProdCart(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await services.deleteProdCart(parseInt(req.params.idCart),parseInt(req.params.idProd));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function addProdToCart(req: Request,res: Response, next: NextFunction) {
  try {
    
    const data = await services.addProdToCart(parseInt(req.params.idCart),parseInt(req.params.idProd));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function getProdsCartId(req: Request,res: Response, next: NextFunction) {
  try {
    
    console.log(req.params.id)
    const data = await services.getCartId(parseInt(req.params.id));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

export default { getCart, deleteCart, postCart, putCart,getCartId ,addProdToCart, getProdsCartId,deleteProdCart};