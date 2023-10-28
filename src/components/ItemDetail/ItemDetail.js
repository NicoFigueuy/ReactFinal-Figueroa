import ItemCount from "../ItemCount/ItemCount";
import "../../input.css";
import {useContext, useState } from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function ItemDetail ({id, image, title, price, category, stock, descripcion}) {

    const [quantityAdded, setQuantityAdded]= useState (0);
   const {addItem}=useContext(CartContext)

  
    
      const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = {
          id,
          title,
          price
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
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            </div>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to= '/cart'>Terminar compra</Link>
                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={ handleOnAdd }/>
                    )
                }
            </footer>
        </article>

    )

}

export default ItemDetail;