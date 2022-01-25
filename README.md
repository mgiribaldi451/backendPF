# Proyecto Final

<p>
Avance del proyecto final , aplicacion backend que cuenta con dos endpoints  /productos /carrito.
Se utiliza mediante Postman , luego tendra usabilidad el frontend.
</p>

## Comenzando
<p>
 Clonar el repositorio:
- git clone https://github.com/mgiribaldi451/backendPF

Tambien se puede descargar desde el navegador.
Una vez clonado se deben instalar las dependencias e iniciar el servidor.
</p>

## Pre - requisitos

 "dependencies": {
 "axios": "^0.25.0",
 "ejs": "^3.1.6",
 "express": "^4.17.2",
 "fs-js": "^1.0.6",
 "nodemon": "^2.0.15",
 "socket.io": "^4.4.1"
 },
   "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^17.0.10"
  }

## Instlacion

- Path> `npm install`



## Ejecucion

<p>Para Ejectuarlo de manera local en el equipo debe ejecutar los siguientes comandos</p>

- Path> `npm run build`

- Path> `npm run dev`


## Ejecutando las pruebas ⚙️

### /productos

`GET: /api/productos`

- Get: localhost:8080/api/productos

`GET: /api/productos/:id`

- Get: localhost:8080/productos/id

Devuelve solo el producto en caso de que exista

`POST: /api/productos`

- Post: localhost:8080/productos

formato body postman:

    {
      "id": 0,
      "description": "post prueba",
      "timestamp": 16427128879254,
      "nombre": "dadssads",
      "codigo": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
      "foto": "string",
      "precio":23432,
      "stock":2
    }

    El campo id dejarlo en 0 al guardar un nuevo producto calculara el id.

`DELETE: /api/productos/:id`

- Delete: localhost:8080/api/productos/:id

Elimina el producto que se pasa en el id


`PUT: /api/productos/:id`

- Put: localhost:8080/api/productos/:id

formato body postman:

    {
      "id": 0,
      "description": "post prueba",
      "timestamp": 16427128879254,
      "nombre": "dadssads",
      "codigo": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
      "foto": "string",
      "precio":23432,
      "stock":2
    }

    Se debe enviar con los campos cambiados que se deban actualizar , retornara el producto actualizado.


### /carrito

`GET: /api/carrito`

- Get: localhost:8080/api/carrito

retornara todos los carritos creados

`GET: /api/carrito/:id`

- Get: localhost:8080/api/carrito/:id

Devuelve el carrito solicitado por ID

`POST: /api/carrito/:id`

- Post: localhost:8080/api/carrito

Formato Carrito:
{
    "id": 1,
    "timestampCart": 1642896592412,
    "productos": [
        {
            "id": 0,
            "description": "dasdasdsdas",
            "timestamp": 1642896592412,
            "nombre": "dadssads",
            "foto": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
            "codigo": "string",
            "precio": 23432,
            "stock": 2
        },
        {
            "id": 2,
            "description": "dasdasdsdas",
            "timestamp": 1642896592412,
            "nombre": "dadssads",
            "foto": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
            "codigo": "string",
            "precio": 23432,
            "stock": 2
        },
        {
            "id": 3,
            "description": "dasdasdsdas",
            "timestamp": 1642896592412,
            "nombre": "dadssads",
            "foto": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
            "codigo": "string",
            "precio": 23432,
            "stock": 2
        }
    ]
}

el campo productos puede iniciarse en un Array vacio y despues solo pueden insertarse productos al carro creado.
El ID de cada carrito se ira generando a medida que se vayan creando


`POST: /api/carrito/:idCart/productos/:idProd`

- Post: localhost:8080/api/carrito/:idCart/productos/:idProd

Se le indica el id del carrito al que agregaremos el producto y el id del producto que se quiere agregar
solicita el producto mediante una request con axios y la guarda en el carrito.

`DELETE: /api/carrito/:id`

- Delete: localhost:8080/carrito/:id

Elimina el carrito que se indico por id


`DELETE: /api/carrito/:idCart/productos/:idProd`

- Delete: localhost:8080/api/carrito/:idCart/productos/:idProd

Se indica el id el carrito del que queremos sacar el producto y el id y se elimina el producto del carrito



## Deploy Heroku

$ heroku login
$ git add .
$ git commit -am "make it better"
$ git push heroku masterf

URL: https://coder-backend-pf.herokuapp.com/

Postman: https://coder-backend-pf.herokuapp.com/api/productos
        https://coder-backend-pf.herokuapp.com/api/carritos
