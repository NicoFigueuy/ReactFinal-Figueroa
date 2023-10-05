import CartWidget from "../CartWidget/CartWidget";
import logoEcommerce from "./assets/logoEcommerce.png";
import "./style.css";
import { NavLink, Link } from "react-router-dom";

function NavBar (){

    //<img src={logoEcommerce} alt="Logo Neo Ecommerce"/>
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/">
                <h3>La Cocina</h3>
            </Link>
            
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column">
                        <NavLink to={`/category/hamburguesa`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Hamburguesa</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/pizza`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pizza</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/empanadas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Empanadas</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/medialunas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>MediaLunas</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/cafe`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cafe</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/bebidas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bebidas</NavLink>
                    </div>
                </div>
                
                
                
                
            </div>
            <CartWidget/>
            </div>
            
            
        </nav>

    )
}

export default NavBar;