import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import MiddleImage from "./MiddleImage";
import NavBar from "./NavBar"
import { useDispatch } from "react-redux";
import{display} from '../redux/ProdctSlice'
import CardProduct from '../User/DemyProducts'
import Slider from "./Slider";
import Footer from "./Footer";
import Categories from "./Categories";
import FooterImage from "./FooterImage";
import Xfactor from "./Xfactor";
import XfactorHome from "./XfactorHome";
import EliteHome from "./EliteHome";
import Desire from "./Desire";
import DesireHome from "./DesireHome";
import ViewProduct from "./ViewProduct";

const  Home = () => {

const dispatch=useDispatch()
    dispatch(display({CardProduct}))
    return(
        <>
        <NavBar/>
        <Carousel/>
        <Categories/>
        <MiddleImage/>
        <Slider/>
        <FooterImage/>
        <Footer/>
        {/* <XfactorHome/> */}
        {/* <EliteHome/> */}
        {/* <DesireHome/> */}
        <ViewProduct/>
        </>
    )
}
export default Home;