//import Productos from "../../interfaces/productos";
import Productos from "../../interfaces/productos";

var productos = [

  {
    "id": 1,
    "description": "dasdasdsdas",
    "timestamp": Date.now(),
    "nombre": "dadssads",
    "foto": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
    "codigo": "string",
    "precio":23432,
    "stock":2
  },
  {
    "id": 2,
    "description": "dasdasdsdas",
    "timestamp": Date.now(),
    "nombre": "dadssads",
    "foto": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
    "codigo": "string",
    "precio":23432,
    "stock":2
  },
  {
    "id": 3,
    "description": "dasdasdsdas",
    "timestamp": Date.now(),
    "nombre": "dadssads",
    "foto": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
    "codigo": "string",
    "precio":23432,
    "stock":2
  }
]

async function getProducts() {


  return productos;
}

async function getProductsId(idProducto:number) {

if (productos.find(e => e.id === idProducto)) {
  let control =productos.findIndex(e => e.id===idProducto)
  return productos[control]
}
else {
  return 'no existe'

}

}

async function postProducts(producto:Productos) {
  const valor = Math.max(...productos.map(o => o.id), 0);
  producto.id = valor + 1
  productos=[...productos,producto]
  return productos;
}

async function putProducts(idProducto:number , producto:Productos) {


  if (productos.find(e => e.id === idProducto)) {
    let control =productos.findIndex(e => e.id===idProducto)
    productos[control]=producto
    return productos[control]
  }
  else {
    return 'no existe'
  
  }
}

async function deleteProducts(idProducto:number) {

  let index=productos.findIndex(a=> a.id ===idProducto)
    if(index!==-1){
    productos.splice(index,1)
    return productos
    }
    else{
        return 'no existe producto con ese id'

    }
  
}


export default { getProducts ,deleteProducts,putProducts, postProducts,getProductsId, productos};