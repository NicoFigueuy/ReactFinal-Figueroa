import React from "react";
import {TiDeleteOutline} from "react-icons/ti"
import {useContext} from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({id,image,title,quantity,price}) => {

    const {removeItem}=useContext(CartContext)
    const handleRemoveItem =()=>{
        removeItem(id)
    }

    return (
        <div key={id}>
          
                <div className="flex justify-evenly ml-32 mt-10 bg-slate-200 w-10/12">
                    <img src={image} alt={title} className="w-36"/>
                    <div className="flex ml-10 text-2xl font-semibold">
                        <p className=" self-center">{title}</p>
                    </div>
                    <div className="flex ml-10 text-2xl font-semibold">
                        <p className=" self-center">{`X  ${quantity}`}</p>
                    </div>
                    <div className="flex ml-10 text-2xl font-semibold">
                        <p className=" self-center">{`$ ${price} C/U`}</p>
                    </div>
                    <div className="flex ml-10 text-2xl font-semibold cursor-pointer" onClick={handleRemoveItem}>
                        <TiDeleteOutline className="self-center scale-110 hover:scale-150"/>
                        </div>
                </div>
          
        </div>
    )
}

export default CartItem;