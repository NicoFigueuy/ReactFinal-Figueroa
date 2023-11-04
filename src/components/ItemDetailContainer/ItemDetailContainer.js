import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../service/Firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams();


    // Consulto un Documento pasado por ID
    useEffect(() => {
       /*  const db = getFirestore(); */
       setLoading(true)
        const item = doc(db, "productos", itemId);
        getDoc(item)
            .then((response) => {
                const data = response.data()
                const productAdapted= {id: response.id, ...data}
                setProductos(productAdapted)
            })
            .catch(error => {
                console.log('error', error)
            })
            .finally(()=>{
                setLoading(false)
            })
            
    }, [itemId]);

    return (
        <div className="container my-5">
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer;


/* import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";




function ItemDetailContainer () {

    const [product, setProduct] = useState(null);
  

    const { itemId } = useParams();
    console.log("El item iD QUE llega es: ", itemId);
    useEffect(()=>{
        getProductById(itemId)
        .then(response => {
            setProduct(response);
        })
        .catch(error => {
            console.error(error);
        })
    }
    ,[itemId])
    console.log('itemId', itemId)
   console.log('product', product)

    return(
        <div className="ItemDetailContainer">
               
            <ItemDetail  {...product}/>
        </div>
    )

}

export default ItemDetailContainer; */