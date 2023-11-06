// import { CardProduct } from "./User/DemyProducts";
import Home from "./User/Pages/Home";
import { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import XfactorHome from "./User/Pages/XfactorHome";
import EliteHome from "./User/Pages/EliteHome";
import DesireHome from "./User/Pages/DesireHome";
import ViewProduct from "./User/Pages/ViewProduct";
import Accessories from "./User/Pages/Accessories";



const App = () => {
    // const [products, setProducts] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        
        <Router>

<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/xfactor" element={<XfactorHome/>}/>
    <Route path="/elite" element={<EliteHome/>}/>
    <Route path="/desire" element={<DesireHome/>}/>
    <Route path="/add/:id" element={<ViewProduct/>}/>
    <Route path="/accessories" element={<Accessories/>}/>
    

</Routes>

        </Router>
        
    )
}
export default App;