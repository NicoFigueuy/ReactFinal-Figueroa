import {BsCart2} from "react-icons/bs"
import "../../input.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


function CartWidget (){
const {cart}=useContext(CartContext)
    return (
        <div  >
            <Link to="/cart" className="flex">
            <div className="text-3xl mr-5">
           <BsCart2/>
            </div>
           <div className="text-xl">
           {cart.length}
           </div>
            </Link>
        </div>
    )
}

export default CartWidget;