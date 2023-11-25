import { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import XfactorHome from "./User/Pages/XfactorHome";
import EliteHome from "./User/Pages/EliteHome";
import DesireHome from "./User/Pages/DesireHome";
import ViewProduct from "./User/Pages/ViewProduct";
import Accessories from "./User/Pages/Accessories";
import Adminhome from "./Dealer/AdminComponent/Adminhome";
import AdmAdd from "./Dealer/AdminComponent/AdmAdd"
import Adminedit from "./Dealer/AdminComponent/AdmEdit";
import Register from "./SignIn/SignUp/Register";
import Home from "./User/Pages/Home"
import AdmUserList from "./Dealer/AdminComponent/AdmUserList";
import Cart from "./User/Components/Cart";
import WishList from "./User/Pages/WishList";
import Login from "./SignIn/SignUp/Login";
import { selectAdminStatus } from "./redux/AuthSlice";
import { useSelector } from "react-redux";



const App = () => {
    // const [products, setProducts] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isAdmin = useSelector(selectAdminStatus);
    return(
        
        <Router>

<Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/xfactor" element={<XfactorHome/>}/>
    <Route path="/elite" element={<EliteHome/>}/>
    <Route path="/desire" element={<DesireHome/>}/>
    <Route path="/add/:id" element={<ViewProduct />} />
    <Route path="/accessories" element={<Accessories/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/addtocart" element={<Cart/>}/>
    <Route path="/wishlist" element={<WishList/>}/>

    {isAdmin && (
          <>
            <Route path="/admhome" element={<Adminhome />} />
            <Route path="/admadd" element={<AdmAdd />} />
            <Route path="/admedit/:productId" element={<Adminedit />} />
            <Route path="/admuserlist" element={<AdmUserList />} />
          </>
        )}
    

    

</Routes>

        </Router>
        
    )
}
export default App;