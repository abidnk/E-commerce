import React, { useState } from 'react'

const Button = () => {
    const [color, setColor] = useState('red')
    const [count, setcount] = useState(0)

    const handleColor = () => {
        setcount(count+1);
        if(count === 2){
            setColor('blue')
            setcount(0)
            
        }
        
    }
  return (
    <>
    <button onClick={handleColor} style={{backgroundColor:color}}>Click Here</button>
    </>
  )
}

export default Button