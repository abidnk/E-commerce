import React from 'react'
import NavBar from '../Components/NavBar'
import Elite from '../Components/Elite'
import Footer from '../Components/Footer'

const EliteHome = () => {
  return (

   
        <div>
        <NavBar/>
      <img
        src='src/assets/img/Elite/DesireHeader image.png'
        alt='pinnem Pani Pali'
        style={{ width: '100%', height: 'auto' }}
      />
    

        <Elite/>
        <Footer/>

    </div>
  )
}

export default  EliteHome