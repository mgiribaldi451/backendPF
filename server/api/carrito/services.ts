//import Productos from "../../interfaces/productos";
import Carro from "../../interfaces/carro";
import axios from "axios"

var carros = [{
  "id":1,
  "timestampCart":Date.now(),
  "productos":[{
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
  }]
}
]

async function getCart() {


  return carros;
}

async function getCartId(idCarro:number) {

if (carros.find(e => e.id === idCarro)) {
  let control =carros.findIndex(e => e.id===idCarro)
  return carros[control]
}
else {
  return 'no existe'

}

}

async function postCart(carro:Carro) {
  const valor = Math.max(...carros.map(o => o.id), 0);
  carro.id = valor + 1
  carros=[...carros,carro]
  return carros;
}

async function putCart(idCart:number , carro:Carro) {


  if (carros.find(e => e.id === idCart)) {
    let control =carros.findIndex(e => e.id===idCart)
    carros[control]=carro
    return carros[control]
  }
  else {
    return 'no existe'
  
  }
}

async function deleteCart(idCart:number) {

  let index=carros.findIndex(a=> a.id ===idCart)
    if(index!==-1){
      carros.splice(index,1)
    return carros
    }
    else{
        return 'no existe producto con ese id'

    }
  
}
async function deleteProdCart(idCart:number , idProd:number) {

  let index=carros.findIndex(a=> a.id ===idCart)
    if(index!==-1){
      let indexProd=carros[index].productos.findIndex(a=>a.id===idProd)
      if (indexProd!==-1){
        carros[index].productos.splice(indexProd,1)
      }else{
        return 'no existe producto con ese id'
      }
      //carros.splice(index,1)
    return carros
    }
    else{
        return 'no existe carro con ese id'

    }
  
}

async function addProdToCart(idCart:number, idProducto:number) {
    
  let res= await axios.get(`http://localhost:8080/api/productos/${idProducto}`)
  let data = res.data
  console.log(data);
  let index=carros.findIndex(a=> a.id ===idCart)
    if(index!==-1){
      carros[index].productos.push(data)
    
    }
    else{
        return 'no existe producto con ese id'

    }
  
  return carros[index]

}

async function getProdsCartId(idCarro:number) {

  if (carros.find(e => e.id === idCarro)) {
    let control =carros.findIndex(e => e.id===idCarro)
    let prods = carros[control].productos
    
    return prods
  }
  else {
    return 'no existe'
  
  }
  
  }


export default { getCart ,deleteCart,putCart, postCart,getCartId,addProdToCart,getProdsCartId,deleteProdCart, carros};