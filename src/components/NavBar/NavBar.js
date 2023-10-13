import CartWidget from "../CartWidget/CartWidget";
/* import "./style.css"; */
import { NavLink, Link } from "react-router-dom";
import "../../input.css";
import logo from "../../img/logo la cocina.png"

function NavBar (){

    return (

        <nav className="bg-rose-400 h-32" role="navigation" aria-label="main navigation">
            <div>
                <div className="flex justify-center">
            <Link to="/">
                <img src={logo} alt="imagen logo 'la cocina'" className="w-52 mb-5"/>
            </Link>
                </div>
            
            <div>
                <div className="flex justify-around text-2xl ">
                    <div className="hover:bg-rose-600 duration-200 rounded" >
                        <NavLink to={`/category/hamburguesa`} className={({isActive}) => isActive ? 'underline ' : 'Option'}> Hamburguesa</NavLink>
                    </div>
                    <div className="hover:bg-rose-600 duration-200 rounded" >
                        <NavLink to={`/category/pizza `} className={({isActive}) => isActive ? 'underline' : 'Option'}>Pizza</NavLink>
                    </div> 
                    <div className="hover:bg-rose-600 duration-200 rounded" >
                        <NavLink to={`/category/empanadas`} className={({isActive}) => isActive ? 'underline' : 'Option'}>Empanadas</NavLink>
                    </div> 
                    <div className="hover:bg-rose-600 duration-200 rounded" >
                        <NavLink to={`/category/medialunas`} className={({isActive}) => isActive ? 'underline' : 'Option'}>MediaLunas</NavLink>
                    </div> 
                    <div className="hover:bg-rose-600 duration-200 rounded" >
                        <NavLink to={`/category/cafe` } className={({isActive}) => isActive ? 'underline' : 'Option'}>Cafe</NavLink>
                    </div> 
                    <div className="hover:bg-rose-600 duration-200 rounded" >
                        <NavLink to={`/category/bebidas`} className={({isActive}) => isActive ? 'underline' : 'Option'}>Bebidas</NavLink>
                    </div> 
                    <div className="hover:bg-rose-600 duration-200 rounded">
                        <CartWidget/>
                    </div>
                </div>
            </div>
            </div>
                
                
                
                
            
            
        </nav>

    )
}

export default NavBar;