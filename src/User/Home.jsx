import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import MiddleImage from "./MiddleImage";
import NavBar from "./NavBar"
import { useDispatch } from "react-redux";
import{display} from '../redux/ProdctSlice'
import CardProduct from '../User/DemyProducts'
import Card from '../User/Card'

const Home = () => {

const dispatch=useDispatch()
    useEffect(()=>{




dispatch(display({CardProduct}))


    },[dispatch])
    return(
        <>
        <NavBar/>
        <Carousel/>
        
        <MiddleImage/>
      <Card/>
        </>
    )
}
export default Home;