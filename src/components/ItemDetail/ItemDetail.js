import ItemCount from "../ItemCount/ItemCount";

function ItemDetail ({id, image, title, price, category, stock}) {

 
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={image} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descricion: 
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={ (quantity)=>{console.log("Cantidad agregada de items ", quantity)} }/>
            </footer>
        </article>

    )

}

export default ItemDetail;