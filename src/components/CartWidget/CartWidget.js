import {BsCart2} from "react-icons/bs"
import "../../input.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


function CartWidget (){
const {totalQuantity}=useContext(CartContext)
    return (
        <div className="flex" >
            <Link to="/cart" style={{display:totalQuantity> 0 ? "block" : "none"}} >
                ´{totalQuantity}
           
            <div className="text-3xl mr-5">
           <BsCart2/>
            </div>
           <div className="text-xl">
            0
           </div>
            </Link>
        </div>
    )
}

export default CartWidget;