import Item from "../Item/Item";
import "../../input.css"


function ItemList ({productos}){

    console.log(productos);
    return (
        <div className="grid grid-cols-3 gap-8 ml-10 mr-10  mt-16">
            {productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )

}
export default ItemList;