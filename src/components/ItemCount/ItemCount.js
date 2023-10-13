import { useState } from "react";
import  "../../input.css"


const ItemCount = ({stock, initial, onAdd,title})=>{

    //Creo un estado
    const [quantity, setQuantity] = useState(initial)

    function increment (){
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    function decrement (){
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }


    return (

        <div className="Counter">
            <div className="Controls">
                <button onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button " onClick={increment}>+</button>
            </div>
            <div>
                <button className="bg-green-300 hover:bg-green-400 rounded-md" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito!
                </button>
            </div>
        </div>

    )

}

export default ItemCount;