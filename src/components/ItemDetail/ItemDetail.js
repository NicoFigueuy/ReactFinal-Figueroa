import ItemCount from "../ItemCount/ItemCount";
import "../../input.css";
import {useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from "react-router-dom";

function ItemDetail ({id, image, title, price, category, stock, descripcion}) {

    const [quantityAdded, setQuantityAdded]= useState (0);
   const {addItem}=useContext(CartContext)

  
    
      const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = {
          id,
          title,
          price,
          image
          
        };
        addItem(item, quantity);
      };

    
 
    return (
        <article className="bg-gray-200">
            <header >
                <h2 className="font-bold mb-5 mt-5 text-xl text-center">
                    {title}
                </h2>
            </header>
            <div className="flex items-center">
            <picture className="mr-8 ml-8 mb-10" >
                <img src={image} alt={title} className="w-96"/>
            
            </picture>
            <section className="text-2xl font-semibold">
               <h3>
                   Ingredientes:
                   <p>{descripcion}</p> 
                </h3>

                <p className="mt-5">
                    Precio: ${price}
                </p>
            </section>
            </div>
            <footer className=" flex flex-col ml-16 w-3/12 ">
                {
                    quantityAdded > 0 ? (
                        <>
                        <div className="flex justify-center">
                        <Link to= '/cart' className="bg-green-300 hover:bg-green-400 rounded-md  mb-5  w-48 text-center">
                            Terminar compra
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <Link to= "/" className="bg-green-300 hover:bg-green-400 rounded-md mb-5 w-48  text-center ">
                                Productos
                                </Link>
                        </div>
                        </>
                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={ handleOnAdd }/>
                    )
                }
            </footer>
        </article>

    )

}

export default ItemDetail;