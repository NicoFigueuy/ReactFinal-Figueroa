import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cartItem/CartItem";

import { Link } from "react-router-dom";

function Cart() {

    const { cart, clearCart, sumTotal } = useContext(CartContext);
    console.log('sumTotal', sumTotal())
    return (
        <div>
            {cart.length === 0 ? (
                <div className=" h-96">
                    <div>
                        <h1 className=" text-center text-2xl font-semibold mt-16">No tienes elementos en el carrito</h1>
                    </div>
                    <div className="flex justify-center">
                    <Link to={"/"} className="block w-2/12 text-center text-xl font-semibold mt-5 bg-green-400 hover:bg-green-600 rounded-xl">
                        Volver</Link>
                        </div>
                </div>
            ) : (
                <div>
                    {cart.map(p => <CartItem key={p.id}{...p}/>)}
                    <div className="flex flex-col  items-center flex-wrap">
                    <h3 className=" mt-10 text-2xl font-semibold mb-5">Total: ${sumTotal()}</h3>
                    <button onClick={() => clearCart()} className=" bg-green-300 hover:bg-green-400 rounded-md text-center w-2/12 block mb-5 text-lg font-semibold">
                        Vaciar Carrito</button>
                    <Link to={"/checkout"} className=" bg-green-300 hover:bg-green-400 rounded-md text-center w-2/12 text-lg font-semibold">
                        Checkout</Link>
                        <Link to= {"/"} className=" bg-green-300 hover:bg-green-400 rounded-md text-center w-2/12 text-lg font-semibold mt-5">Volver</Link>
                    </div>
                </div>
            )}
        </div>
    );
}


/*  if(totalQuantity===0){
     return (
         <div>
             <h1>No tienes elementos en el carrito</h1>
             <Link to={"/"}>Productos</Link>
         </div>
     )
 }
 return (
 <div>
     {cart.map(p => <CartItem key={p.id}{...p}/>)}
     <h3>Total: ${sumTotal()}</h3>
     <button onClick={()=> clearCart()}>Vaciar Carrito</button>
     <Link to={"/checkout"}>checkout</Link>
 </div>
) */







export default Cart 
