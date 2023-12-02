import React from 'react'
import Xfactor from '../Components/Xfactor'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import xfactor from '../../assets/img/X-factor/X-factorHeader.png'
const XfactorHome = () => {
  return (


   
        <div >
        <NavBar/>
      <img
        src={xfactor}
        alt='pinnem Pani Pali'
        style={{ width: '100%', height: 'auto' }}
      />

        <Xfactor/>
        <Footer/>

    </div>
  )
}

export default XfactorHome