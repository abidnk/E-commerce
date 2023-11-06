import React from 'react'
import Xfactor from '../Components/Xfactor'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const XfactorHome = () => {
  return (


   
        <div >
        <NavBar/>
      <img
        src='src/assets/img/X-factor/X-factorHeader.png'
        alt='pinnem Pani Pali'
        style={{ width: '100%', height: 'auto' }}
      />

        <Xfactor/>
        <Footer/>

    </div>
  )
}

export default XfactorHome