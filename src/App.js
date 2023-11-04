import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "./input.css"; //Cuando importo una hoja de estilos, no hace falta guardarla en una variable.
//import ItemCount from "./components/ItemCount/ItemCount.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import CheckOut from "./components/CheckOut/CheckOut.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.js";
import Cart from "./components/cart/Cart.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path={"/checkout"} element={<CheckOut />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>   
        <Footer/>
        </CartProvider>   
      </BrowserRouter>     

    </div>
    
  );
}

export default App;
