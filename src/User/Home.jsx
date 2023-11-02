import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import MiddleImage from "./MiddleImage";
import NavBar from "./NavBar"
import { useDispatch } from "react-redux";
import{display} from '../redux/ProdctSlice'
import CardProduct from '../User/DemyProducts'
import Slider from "./Slider";
import Footer from "./Footer";

const Home = () => {

const dispatch=useDispatch()
    dispatch(display({CardProduct}))
    return(
        <>
        <NavBar/>
        <Carousel/>
        <MiddleImage/>
        <Slider/>
        <Footer/>
        </>
    )
}
export default Home;