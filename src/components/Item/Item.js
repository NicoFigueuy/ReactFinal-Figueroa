import "../../input.css";
import {Link} from "react-router-dom";



function Item ({id, title, image, price, stock}){

    

    return (
        <article className=" bg-slate-200 shadow-lg  shadow-gray-600  rounded-md">
            <header >
                <h2 className="text-center mb-5 mt-5 text-xl font-medium">
                    {title}
                </h2>
            </header>
            <picture className="flex justify-center" >
                <img src={image} alt={title} className=" ml-5 w-2/3"/>
            </picture>
            <section>
                <p className="text-center mt-5">
                    Precio: ${price}
                </p>
                <p className="text-center">
                    Stock disponible: {stock } 
                </p>
            </section>
            <section className="flex justify-center" >
                <footer className="text-center bg-green-400 hover:bg-green-600 rounded-xl font-semibold mb-5 mt-5 w-6/12">
                <Link to={`/item/${id}` } >
                    
                    
                   <p>Ver detalle  </p> 
                   </Link>
            </footer>
            
            </section>
             
        </article>
    )

}

export default Item;