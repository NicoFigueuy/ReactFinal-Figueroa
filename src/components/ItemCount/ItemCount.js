import { useState } from "react";
import  "../../input.css"
import {AiOutlineMinusCircle} from "react-icons/ai"
import {IoMdAddCircleOutline} from "react-icons/io"
import {Link} from "react-router-dom";


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

        <div className="w-96 ml-8">
            <div className="flex justify-center w-72">
                <button className="text-3xl mr-5 hover:scale-110" onClick={decrement}><AiOutlineMinusCircle/></button>
                <h4 className="text-3xl">{quantity}</h4>
                <button className="text-3xl ml-5 hover:scale-110" onClick={increment}><IoMdAddCircleOutline/></button>
            </div>
            <div className="flex flex-col">
                <button className="bg-green-300 hover:bg-green-400 rounded-md mt-3 mr-28" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
                <Link to={"/"} className="bg-green-300 hover:bg-green-400 rounded-md mb-10 mt-3 mr-28 text-center">Volver</Link>
            </div>
        </div>

    )

}

export default ItemCount;