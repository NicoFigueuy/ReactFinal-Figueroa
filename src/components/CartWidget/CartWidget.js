import {BsCart2} from "react-icons/bs"
import "../../input.css"

function CartWidget (){

    return (
        <div className="flex" >
            <div className="text-3xl mr-5">
           <BsCart2/>
            </div>
           <div className="text-xl">
            0
           </div>
        </div>
    )
}

export default CartWidget;