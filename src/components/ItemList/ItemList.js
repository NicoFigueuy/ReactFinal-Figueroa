import Item from "../Item/Item";
import "../../input.css"


function ItemList ({products}){

    console.log(products);
    return (
        <div className="bg-gray-200 grid grid-cols-3 gap-8 ">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )

}
export default ItemList;