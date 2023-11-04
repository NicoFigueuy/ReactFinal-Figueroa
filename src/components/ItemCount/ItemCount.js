import { useState, useEffect } from "react";
import  "../../input.css"
import {AiOutlineMinusCircle} from "react-icons/ai"
import {IoMdAddCircleOutline} from "react-icons/io"
import {Link} from "react-router-dom";


const ItemCount = ({stock, initial, onAdd})=>{

    //Creo un estado
    const [quantity, setQuantity] = useState(initial)
    const [counter, setCounter] = useState(1);
    const [vendido, setVendido] = useState(false);
    const [itemStock, setItemStock] = useState(stock);

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

    const addToCart = (quantity) => {
        if (counter <= stock) {
            setCounter(1);
            setItemStock(stock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
    }
    
    useEffect(() => {
        setItemStock(stock);
    }, [stock])


    return (

        <div className="w-96 ml-8">
            <div className="flex justify-center w-72">
                <button className="text-3xl mr-5 hover:scale-110" onClick={decrement}><AiOutlineMinusCircle/></button>
                <h4 className="text-3xl">{quantity}</h4>
                <button className="text-3xl ml-5 hover:scale-110" onClick={increment}><IoMdAddCircleOutline/></button>
            </div>
            <div className="flex flex-col">
                <button className="bg-green-300 hover:bg-green-400 rounded-md mt-3 mr-28" onClick={() => addToCart(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
                <Link to={"/"} className="bg-green-300 hover:bg-green-400 rounded-md mb-10 mt-3 mr-28 text-center">Volver</Link>
            </div>
        </div>

    )

}

export default ItemCount;