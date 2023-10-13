import "../../input.css";
import {Link} from "react-router-dom";



function Item ({id, title, image, price, stock}){

    console.log(stock)

    return (
        <article className="w-full">
            <header >
                <h2 className="text-center">
                    {title}
                </h2>
            </header>
            <picture className="w-1/3">
                <img src={image} alt={title}/>
            </picture>
            <section>
                <p className="text-center">
                    Precio: ${price}
                </p>
                <p className="text-center">
                    Stock disponible: {stock } 
                </p>
            </section>
            <footer className="text-center bg-green-400 hover:bg-green-600 rounded-xl font-semibold">
                <Link to={`/item/${id}` } >Ver detalle</Link>
            </footer>
        </article>
    )

}

export default Item;