import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";

function Cart() {
    
    const {cart, clearCart, totalQuantity, total}=useContext(CartContext);
    if(totalQuantity===0){
        return (
            <div>
                <h1>No tienes elementos en el carrito</h1>
                <Link to={"/"}>Productos</Link>
            </div>
        )
    }
    return (
    <div>
        {cart.map(p => <cartItem key={p.id}{...p}/>)}
        <h3>Total: ${total}</h3>
        <button onClick={()=> clearCart()}>Vaciar Carrito</button>
        <Link to={"/checkout"}></Link>
    </div>
  )
}

export default Cart