// import { CardProduct } from "./User/DemyProducts";
import Home from "./User/Home";
import { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import XfactorHome from "./User/XfactorHome";
import EliteHome from "./User/EliteHome";
import DesireHome from "./User/DesireHome";



const App = () => {
    // const [products, setProducts] = useState();
    return(
        
        <Router>

<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/xfactor" element={<XfactorHome/>}/>
    <Route path="/elite" element={<EliteHome/>}/>
    <Route path="/desire" element={<DesireHome/>}/>
    

</Routes>

        </Router>
        
    )
}
export default App;