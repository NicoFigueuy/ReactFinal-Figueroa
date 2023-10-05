//import Producto from "./pages/producto"

const lista_productos = [
    {
        "id": 1,
        "image": "imagenes/hamburger_01.jpg",
        "title": "Hamburguesa 'la cocina'",
        "price": 300,
        "category": "hamburguesa",
        "stock": 20
    },
    {
        "id": 2,
        "image": "imagenes/hamburger_02.jpg",
        "title": "Hamburguesa 'Special'",
        "price": 250,
        "category": "hamburguesa",
        "stock": 20
    },
    {
        "id": 3,
        "image": "imagenes/hamburger_03.jpg",
        "title": "Hamburguesa 'Robusta'",
        "price": 350,
        "category": "hamburguesa",
        "stock": 20
    },
    {
        "id": 4,
        "image": "imagenes/hamburger_04.jpg",
        "title": "Hamburguesa 'Imbatible'",
        "price": 400,
        "category": "hamburguesa",
        "stock": 20
    },
    {
        "id": 5,
        "image": "imagenes/hamburger_05.jpg",
        "title": "Hamburguesa 'Delicius'",
        "price": 450,
        "category": "hamburguesa",
        "stock": 20
    },
    {
        "id": 6,
        "image": "imagenes/pizza_01.jpg",
        "title": "Pizza Muzzarela",
        "price": 300,
        "category": "pizza",
        "stock": 20
    },
    {
        "id": 7,
        "image": "imagenes/pizza_02.jpg",
        "title": "Pizza Cuatro quesos",
        "price": 350,
        "category": "pizza",
        "stock": 20
    },
    {
        "id": 8,
        "image": "imagenes/pizza_03.jpg",
        "title": "Pizza Pepperoni",
        "price": 370,
        "category": "pizza",
        "stock": 20
    },
    {
        "id": 9,
        "image": "imagenes/pizza_04.jpg",
        "title": "Pizza Margherita",
        "price": 360,
        "category": "pizza",
        "stock": 20
    },
    {
        "id": 10,
        "image": "imagenes/pizza_05.jpg",
        "title": "Pizza Marinara",
        "price": 320,
        "category": "pizza",
        "stock": 20
    },
    {
        "id": 11,
        "image": "imagenes/empanadas_01.jpg",
        "title": "Empanada capresse",
        "price": 110,
        "category": "empanada",
        "stock": 20
    },
    {
        "id": 12,
        "image": "imagenes/empanadas_02.jpg",
        "title": "Empanada calabresa",
        "price": 110,
        "category": "empanada",
        "stock": 20
    },
    {
        "id": 13,
        "image": "imagenes/empanadas_03.jpg",
        "title": "Empanada Napolitana",
        "price": 110,
        "category": "empanada",
        "stock": 20
    },
    {
        "id": 14,
        "image": "imagenes/empanadas_04.jpg",
        "title": "Empanada Arabe",
        "price": 110,
        "category": "empanada",
        "stock": 20
    },
    {
        "id": 15,
        "image": "imagenes/empanadas_05.jpg",
        "title": "Empanada Tucumana",
        "price": 110,
        "category": "empanada",
        "stock": 20
    },
    {
        "id": 16,
        "image": "imagenes/caffe_01.jpg",
        "title": "Cafe corto",
        "price": 30,
        "category": "cafe",
        "stock": 20
    },
    {
        "id": 17,
        "image": "imagenes/caffe_02.jpg",
        "title": "Cafe Largo",
        "price": 50,
        "category": "cafe",
        "stock": 20
    },
    {
        "id": 19,
        "image": "imagenes/capuccino.jpeg",
        "title": "Cafe Cappuccino",
        "price": 80,
        "category": "cafe",
        "stock": 20
    },
    {
        "id": 21,
        "image": "imagenes/medialuna_01.jpg",
        "title": "Media Lunas",
        "price": 50,
        "category": "media luna",
        "stock": 20
    },
    {
        "id": 22,
        "image": "imagenes/coca_cola.jpg",
        "title": "Bebidas: Coca Cola",
        "price": 180,
        "category": "bebida",
        "stock": 20
    },
    {
        "id": 23,
        "image": "imagenes/SPRITE-COMUN.jpg",
        "title": "Bebidas: Sprite",
        "price": 180,
        "category": "bebida",
        "stock": 20
    },
    {
        "id": 24,
        "image": "imagenes/paso.webp",
        "title": "Bebidas: Pomelo",
        "price": 180,
        "category": "bebida",
        "stock": 20
    },
    {
        "id": 25,
        "image": "imagenes/patricia.jpg",
        "title": "Bebidas: Patricia",
        "price": 180,
        "category": "bebida",
        "stock": 20
    },
    {
        "id": 26,
        "image": "imagenes/pilsen0.jpg",
        "title": "Bebidas: Pilsen 0",
        "price": 180,
        "category": "bebida",
        "stock": 20
    }
]

   // export default lista_productos;

   export const getProductos = ()=>{

    return new Promise((resolve)=>{

        setTimeout ( ()=> {

            //let cantidad  = Math.floor(Math.random() * lista_productos.length);
            //console.log("Cantidad de productos devueltos en el asyncMock:", cantidad);
            resolve(lista_productos);

                },500)
        }  )
   }

   export const getProductById = (idProduct)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.find( prod => prod.id == idProduct))
        }, 500);
        
    })

   }

   export const getProductsByCategory = (category)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.filter( prod => prod.category == category ))
        }, 500);
    })

   }