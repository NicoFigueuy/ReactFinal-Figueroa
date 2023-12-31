//import Producto from "./pages/producto"
import hamburguer_01 from "./img/hamburger_01.jpg"
import hamburguer_02 from "./img/hamburger_02.jpg"
import hamburguer_03 from "./img/hamburger_03.jpg"
import hamburguer_04 from "./img/hamburger_04.jpg"
import hamburguer_05 from "./img/hamburger_05.jpg"
import pizza_01 from "./img/pizza_01.jpg"
import pizza_02 from "./img/pizza_02.jpg"
import pizza_03 from "./img/pizza_03.jpg"
import pizza_04 from "./img/pizza_04.jpg"
import pizza_05 from "./img/pizza_05.jpg"
import empanadas_01 from "./img/empanadas_01.jpg"
import empanadas_02 from "./img/empanadas_02.jpg"
import empanadas_03 from "./img/empanadas_03.jpg"
import empanadas_04 from "./img/empanadas_04.jpg"
import empanadas_05 from "./img/empanadas_05.jpg"
import medialuna_01 from "./img/medialuna_01.jpg"
import cafe_01 from "./img/caffe_01.jpg"
import cafe_02 from "./img/caffe_02.jpg"
import cafe_03 from "./img/capuccino.jpeg"
import pilsen_zero from "./img/pilsen0.jpg"
import paso_toros from "./img/paso.webp"
import coca_cola from "./img/coca_cola.jpg"
import patricia from "./img/patricia.jpg"
import sprite from "./img/SPRITE-COMUN.jpg"

const lista_productos = [
    {
        "id": 1,
        "image": hamburguer_01,
        "title": "Hamburguesa 'la cocina'",
        "price": 300,
        "category": "hamburguesa",
        "stock": 20,
        "descripcion":"Carne a la parrilla, lechuga fresca, tomate maduro, cebolla crujiente, salsa especial, pan de sésamo." 
    },
    {
        "id": 2,
        "image": hamburguer_02,
        "title": "Hamburguesa 'Special'",
        "price": 250,
        "category": "hamburguesa",
        "stock": 20,
        "descripcion":"Carne a la parrilla, bacon crujiente, cebolla caramelizada, queso cheddar fundido, salsa barbacoa ahumada, pan de sésamo." 
    },
    {
        "id": 3,
        "image": hamburguer_03,
        "title": "Hamburguesa 'Robusta'",
        "price": 350,
        "category": "hamburguesa",
        "stock": 20,
        "descripcion":"Hongo Portobello a la parrilla, espinacas salteadas, pimientos asados, cebolla morada, queso de cabra, bollo integral." 
    },
    {
        "id": 4,
        "image": hamburguer_04,
        "title": "Hamburguesa 'Imbatible'",
        "price": 400,
        "category": "hamburguesa",
        "stock": 20,
        "descripcion":"Carne a la parrilla, guacamole casero, jalapeños en rodajas, pimientos asados, queso pepper jack, salsa de chipotle, pan de sésamo." 
    },
    {
        "id": 5,
        "image": hamburguer_05,
        "title": "Hamburguesa 'Delicius'",
        "price": 450,
        "category": "hamburguesa",
        "stock": 20,
        "descripcion":"Carne de res a la parrilla, bacon crujiente, huevo frito, cebolla caramelizada, lechuga fresca, queso cheddar fundido, salsa barbacoa y mayonesa especial, pan de sésamo" 
    },
    {
        "id": 6,
        "image": pizza_01,
        "title": "Pizza Muzzarela",
        "price": 300,
        "category": "pizza",
        "stock": 20,
        "descripcion":"Salsa de tomate, mozzarella, orégano." 
    },
    {
        "id": 7,
        "image": pizza_02,
        "title": "Pizza Cuatro quesos",
        "price": 350,
        "category": "pizza",
        "stock": 20,
        "descripcion":"Mozzarella, gorgonzola, parmesano, queso de cabra." 
    },
    {
        "id": 8,
        "image": pizza_03,
        "title": "Pizza Pepperoni",
        "price": 370,
        "category": "pizza",
        "stock": 20,
        "descripcion":"Salsa de tomate, mozzarella, pepperoni." 
    },
    {
        "id": 9,
        "image": pizza_04,
        "title": "Pizza Margherita",
        "price": 360,
        "category": "pizza",
        "stock": 20,
        "descripcion":"Salsa de tomate, mozzarella, albahaca, aceite de oliva." 
    },
    {
        "id": 10,
        "image": pizza_05,
        "title": "Pizza Marinara",
        "price": 320,
        "category": "pizza",
        "stock": 20,
        "descripcion":"Salsa de tomate, ajo, aceite de oliva, orégano." 
    },
    {
        "id": 11,
        "image": empanadas_01,
        "title": "Empanada capresse",
        "price": 110,
        "category": "empanadas",
        "stock": 20,
        "descripcion":"Tomate maduro, mozzarella fresca, hojas de albahaca." 
    },
    {
        "id": 12,
        "image": empanadas_02,
        "title": "Empanada calabresa",
        "price": 110,
        "category": "empanadas",
        "stock": 20,
        "descripcion":"Salchichas calabresas, cebolla, pimiento rojo, queso y especias." 
    },
    {
        "id": 13,
        "image": empanadas_03,
        "title": "Empanada Napolitana",
        "price": 110,
        "category": "empanadas",
        "stock": 20,
        "descripcion":"Tomate, mozzarella, albahaca, aceitunas negras." 
    },
    {
        "id": 14,
        "image": empanadas_04,
        "title": "Empanada Arabe",
        "price": 110,
        "category": "empanadas",
        "stock": 20,
        "descripcion":"Carne de cordero o res, comino, pimentón, cebolla, perejil." 
    },
    {
        "id": 15,
        "image": empanadas_05,
        "title": "Empanada Tucumana",
        "price": 110,
        "category": "empanadas",
        "stock": 20,
        "descripcion":"Carne de res, cebolla, huevo duro, aceitunas verdes, comino, papas." 
    },
    {
        "id": 16,
        "image": cafe_01,
        "title": "Cafe corto",
        "price": 30,
        "category": "cafe",
        "stock": 20,
        "descripcion":"Un intenso y concentrado shot de café, perfecto para los amantes del sabor fuerte y rápido." 
    },
    {
        "id": 17,
        "image": cafe_02,
        "title": "Cafe Largo",
        "price": 50,
        "category": "cafe",
        "stock": 20,
        "descripcion":"Una taza generosa, con más agua, para disfrutar de un café más suave y aromático." 
    },
    {
        "id": 19,
        "image": cafe_03,
        "title": "Cafe Cappuccino",
        "price": 80,
        "category": "cafe",
        "stock": 20,
        "descripcion":"Una obra maestra de espresso, leche vaporizada y espuma cremosa, un equilibrio perfecto entre intensidad y suavidad." 
    },
    {
        "id": 21,
        "image": medialuna_01,
        "title": "Media Lunas",
        "price": 50,
        "category": "medialunas",
        "stock": 20,
        "descripcion":"La media luna, con su exterior dorado y crujiente y su interior suave y mantecoso, es un placer para los sentidos. Ideal para cualquier momento del día" 
    },
    {
        "id": 22,
        "image": coca_cola,
        "title": "Bebidas: Coca Cola",
        "price": 180,
        "category": "bebidas",
        "stock": 20,
        "descripcion":"La icónica refrescante y efervescente cola con un sabor único y reconocible en todo el mundo." 
    },
    {
        "id": 23,
        "image": sprite,
        "title": "Bebidas: Sprite",
        "price": 180,
        "category": "bebidas",
        "stock": 20,
        "descripcion":"Una bebida refrescante y burbujeante con un toque de limón-lima, perfecta para saciar la sed." 
    },
    {
        "id": 24,
        "image": paso_toros,
        "title": "Bebidas: Pomelo",
        "price": 180,
        "category": "bebidas",
        "stock": 20,
        "descripcion":"Una bebida refrescante de pomelo con un sabor cítrico y chispeante que te transporta a la frescura de la naturaleza." 
    },
    {
        "id": 25,
        "image": patricia,
        "title": "Bebidas: Patricia",
        "price": 180,
        "category": "bebidas",
        "stock": 20,
        "descripcion":"La cerveza uruguaya de tradición, con un sabor suave y refrescante que acompaña los momentos especiales." 
    },
    {
        "id": 26,
        "image": pilsen_zero,
        "title": "Bebidas: Pilsen 0",
        "price": 180,
        "category": "bebidas",
        "stock": 20,
        "descripcion":"La opción sin alcohol de la cerveza Pilsen, con el mismo sabor auténtico pero sin el contenido de alcohol. Ideal para disfrutar sin restricciones." 
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

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const product = lista_productos.find((prod)=>
            prod.id == idProduct)
            if(product) {
                
                resolve(product);

            }else{
                reject("producto no encontrado")
            }
            
        }, 500);
        
    })

   }

   export const getProductsByCategory = (category)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.filter( prod => prod.category === category ))
        }, 500);
    })

   }