// import React from 'react';

// const MiddleImage = ()=>  {
//   return (
//     <div className='mt-5' style={{ position: 'relative' }}>
//     <img
//       src='src/assets/img/Screenshot from 2023-10-29 16-32-17.png'
//       alt='Pani Pali'
//     />
    
//     <img
//       src='src/assets/img/Screenshot from 2023-10-30 10-06-35.png'
//       alt='Overlapping Image'
//       style={{
//         position: 'absolute',
//         top: '420px',
//         left: '1020px',
//         zIndex: '1', 
//         cursor: 'pointer'
//       }}
//     />
   
//   </div>
//   );
// }
// export default MiddleImage



// import React from 'react';

// const MiddleImage = () => {
//   return (
//     <div className='mt-5' style={{ position: 'relative' }}>
//       <img
//         src='src/assets/img/Screenshot from 2023-10-29 16-32-17.png'
//         alt='Pani Pali'
//         style={{ width: '100%' }} /* Make the main image responsive */
//       />

//       <img
//         src='src/assets/img/Screenshot from 2023-10-30 10-06-35.png'
//         alt='Overlapping Image'
//         style={{
//           position: 'absolute',
//           top: '420px',
//           left: '1020px',
//           zIndex: '1',
//           cursor: 'pointer',
//           width: '100%', /* Make the overlapping image responsive */
//         }}
//       />
//     </div>
//   );
// };

// export default MiddleImage;


import React from 'react';
import './MiddleImage.css'
import { Link } from 'react-router-dom';
const MiddleImage = ()=>  {
  return (
    <div className='image' style={{ position: 'relative', maxWidth: '100%', minWidth: '320px' }}>
      <Link to={'/xfactor'}>
      <img
        src='src/assets/img/Screenshot from 2023-10-29 16-32-17.png'
        alt='Pani Pali'
        style={{ width: '100%', height: 'auto' }}
      />
      </Link>
      {/* <img
        src='src/assets/img/Screenshot from 2023-10-30 10-06-35.png'
        alt='Overlapping Image'
        style={{
          position: 'absolute',
          top: '420px',
          left: '1020px',
          zIndex: '1',
          cursor: 'pointer',
          width: '200px',
          height: '100px'
        }} */}
      {/* /> */}
    </div>
  );
}
export default MiddleImage;

