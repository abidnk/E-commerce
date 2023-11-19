import Carousel from "../Components/Carousel";
import MiddleImage from "../Components/MiddleImage";
import NavBar from "../Components/NavBar"
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import Categories from "../Components/Categories";
import FooterImage from "../Components/FooterImage";


const  Home = () => {

    return(
        <>
        <NavBar/>
        <Carousel/>
        <Categories/>
        <MiddleImage/>
        <Slider/>
        <FooterImage/>
        <Footer/>
        
        
        </>
    )
}
export default Home;