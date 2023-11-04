import React from 'react'
import Xfactor from '../Xfactor'
import NavBar from '../NavBar'
import Footer from '../Footer'

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