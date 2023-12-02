
import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import accessories from '../../assets/img/Accessories.png'
const Accessories = ()=>  {
  return (
    <>
    <NavBar/>
      <div className='image-column' style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        
  <img
    src={accessories}
    alt='pinnem Pani Pali'
    style={{ maxWidth: '100%', height: 'auto' }}
  />
  <h3>Work In Progress...</h3>
  <p>Be patient we are working on it </p>
  <Link to={"/"}>
  <button style={{background:"black" 
                 ,width:"150px",
                 height:"45px",
                color:"white"
}}  >Explore More</button></Link>
</div>
<Footer/>
</>

  );
}
export default Accessories;