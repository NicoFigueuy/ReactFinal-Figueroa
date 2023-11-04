import { useContext, useState } from "react"
import { db } from "../../service/Firebase/firebaseConfig"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch
} from "firebase/firestore"
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../checkoutForm/CheckoutForm"
import {Link} from "react-router-dom"

function CheckOut() {

const [loading, setLoading] = useState(false);
const [orderId, setOrderId] = useState("")
const{cart, sumTotal, clearCart}= useContext(CartContext)

const createOrder = async ({ name, phone, email }) => {
  setLoading(true);
  try {
    const objOrder = {
      buyer: {
        name,
        phone,
        email,
      },
      items: cart,
      total: sumTotal(),
      date: Timestamp.fromDate(new Date()),
    };
    const batch = writeBatch(db);
    const outOfStock = [];
    const id= cart.map(prod => prod.id)
    const productsRef = collection(db, "productos")
    const productAddedFromFirestore = await getDocs(query(productsRef,where(documentId(),"in",id)))
    const {docs} = productAddedFromFirestore

    docs.forEach(doc => {
      const dataDoc = doc.data()
      const stockDb = dataDoc.stock
      const productAddedToCart = cart.find(prod => prod.id === doc.id)
      const prodQuantity= productAddedToCart?.quantity

    if(stockDb >= prodQuantity){
      batch.update(doc.ref,{Stock: stockDb - prodQuantity})
    }else{
      outOfStock.push({id: doc.id, ...dataDoc})
    }
  })

    if(outOfStock.length === 0){
       await batch.commit();
       const orderRef= collection(db,"orders")
       const orderAdded = await addDoc(orderRef,objOrder)
       setOrderId(orderAdded.id); 
       clearCart();
    }else{
      console.error("hay productos que estan fuera de stock")
    }

   
    
    
  } catch (error) {
    console.log("Error creating order:", error);
  } finally {
    setLoading(false);
  }
};



if(loading){
  return <h1 className=" font-semibold text-3xl text-center mt-16">Se esta generando su orden...</h1>
}
if(orderId){
  return (
    <div className="flex flex-col mb-96 ">
      <h1 className=" font-semibold text-3xl text-center mt-16" >El ID de su orden es: {orderId}</h1>
      <div className="flex justify-center">
         <Link to= "/" className=" hover:bg-green-700 bg-green-500 text-white w-2/12 text-center mt-5">Inicio</Link>
      </div>
     
    </div>
  
  )
}
  return (
    <div>
      <h1 className=" font-semibold text-2xl text-center mt-16">Checkout</h1>
      <CheckoutForm onConfirm = {createOrder}/>
      </div>
  )
}

export default CheckOut