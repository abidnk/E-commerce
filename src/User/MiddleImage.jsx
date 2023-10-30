import React from 'react';

const MiddleImage = ()=>  {
  return (
    <div className='mt-5' style={{ position: 'relative' }}>
    <img
      src='src/assets/img/Screenshot from 2023-10-29 16-32-17.png'
      alt='Pani Pali'
    />
    
    <img
      src='src/assets/img/Screenshot from 2023-10-30 10-06-35.png'
      alt='Overlapping Image'
      style={{
        position: 'absolute',
        top: '420px',
        left: '1020px',
        zIndex: '1', 
        cursor: 'pointer'
      }}
    />
   
  </div>
  );
}
export default MiddleImage