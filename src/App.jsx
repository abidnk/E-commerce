import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import XfactorHome from "./User/Pages/XfactorHome";
import EliteHome from "./User/Pages/EliteHome";
import DesireHome from "./User/Pages/DesireHome";
import ViewProduct from "./User/Pages/ViewProduct";
import Accessories from "./User/Pages/Accessories";
import Adminhome from "./Dealer/AdminComponent/Adminhome";
import AdmAdd from "./Dealer/AdminComponent/AdmAdd";
import Adminedit from "./Dealer/AdminComponent/AdmEdit";
import Register from "./SignIn/SignUp/Register";
import Home from "./User/Pages/Home";
import AdmUserList from "./Dealer/AdminComponent/AdmUserList";
import Cart from "./User/Components/Cart";
import WishList from "./User/Pages/WishList";
import Login from "./SignIn/SignUp/Login";
import { selectAdminStatus } from "./redux/AuthSlice";
import { useSelector } from "react-redux";
import Payment from "./User/Components/Payment";
import Error from "./User/Components/Error";

const App = () => {
  const isAdmin = useSelector(selectAdminStatus);
  console.log(isAdmin);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/xfactor" element={<XfactorHome />} />
        <Route path="/elite" element={<EliteHome />} />
        <Route path="/desire" element={<DesireHome />} />
        <Route path="/add/:id" element={<ViewProduct />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addtocart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/*" element={<Error />} />

        {isAdmin ? (
          <>
            <Route path="/admuserlist" element={<AdmUserList />} />
            <Route path="/admhome" element={<Adminhome />} />
            <Route path="/admadd" element={<AdmAdd />} />
            <Route path="/admedit/:productId" element={<Adminedit />} />
            <Route path="/admuserlist" element={<AdmUserList />} />
          </>
        ) : (
          ""
        )}
      </Routes>
    </Router>
  );
};

export default App;