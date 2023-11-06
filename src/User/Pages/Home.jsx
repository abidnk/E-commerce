import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import MiddleImage from "../Components/MiddleImage";
import NavBar from "../Components/NavBar"
import { useDispatch } from "react-redux";
import{display} from '../../redux/ProdctSlice'
import CardProduct from '../Components/DemyProducts'
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import Categories from "../Components/Categories";
import FooterImage from "../Components/FooterImage";
import Accessories from "./Accessories";


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
        {/* <Accessories/> */}
        
        </>
    )
}
export default Home;