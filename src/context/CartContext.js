import { createContext, useState } from "react";
export const CartContext = createContext({
    cart: []
})

export const CartProvider= ({children})=>{
    const [cart, setCart]=useState([])

    console.log('Cart', cart.length)

    const addItem = (item, quantity)=>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem= (itemId)=>{
        const cartUpdate= cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }
    const clearCart = ()=>{
        setCart([])
    }
    const isInCart = (itemId)=>{
        return cart && cart.some(prod=> prod.id === itemId)
    }

    const totalQuantity = () => {
        return cart.reduce((total, item) => total += item.quantity, 0);
    }

    const sumTotal = () => {
        return cart.reduce((total, item) => total + item.quantity * item.price, 0);
    }
    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,sumTotal,totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}