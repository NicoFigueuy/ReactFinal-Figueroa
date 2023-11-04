import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "../loading/Loading";
import { db } from "../../service/Firebase/firebaseConfig";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        /* const db = getFirestore(); */
        setLoading(true)
        const itemsCollection = collection(db, "productos");
        const q = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
        
        getDocs(q)
            .then((response) => {
                const productAdapted = response.docs.map(doc=>{
                    const data =doc.data()
                    return {id: doc.id, ...data}
                })
            setProductos(productAdapted);
           
        })
        .catch(error => {
            console.log('error', error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [categoryId]);
    
    return (
        <div className="text-center ml-5 mr-5 mb-15 ">
            {loading ? <Loading /> : <><h1 className="m-10 font-semibold text-3xl text-center">{greeting}</h1><ItemList productos={productos} /></>}
        </div>
    )
}

export default ItemListContainer;




/* import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"



function ItemListContainer ({greeting}){

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    console.log("La categoria que llego aca es:", categoryId)

    //Con el useEffect hago el llamado a la API o en este caso el asyncMock:
    useEffect(()=>{

        const asyncFunc = categoryId ? getProductsByCategory : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId]) //El segundo parametro con un array vacio significa que solo se va a ejecutar cuando se renderize por primera vez
    //Fin del useEffect


    return(
        <div className="text-center ml-5 mr-5 mb-15 ">
            <h1 className="m-10 font-semibold text-3xl">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer; */