// import React from 'react'
// import './Campus.css'
// import  g1 from'../../assets/gallery-1.png'
// import  g2 from'../../assets/gallery-2.png'
// import  g3 from'../../assets/gallery-3.png'
// import  g4 from'../../assets/gallery-4.png'
// import whitearrow from '../../assets/white-arrow.png'
// const Campus = () => {
//   return (
//     <div className='campus'>
//         <div className='galary'>
//             <img src={g1} />
//             <img src={g2} />
//             <img src={g3} />
//             <img src={g4} />
//         </div>
//       <button className='btn dark-btn' >see more<img src={ whitearrow}/></button>
//     </div>
//   )
// }

// export default Campus


import React from 'react';
import './Campus.css';
import g1 from '../../assets/gallery-1.png';
import g2 from '../../assets/gallery-2.png';
import g3 from '../../assets/gallery-3.png';
import g4 from '../../assets/gallery-4.png';
import whitearrow from '../../assets/white-arrow.png';

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={g1} alt="Gallery Image 1" />
        <img src={g2} alt="Gallery Image 2" />
        <img src={g3} alt="Gallery Image 3" />
        <img src={g4} alt="Gallery Image 4" />
      </div>
      <button className='btn dark-btn'>
        See More <img src={whitearrow} alt="Arrow Icon" />
      </button>
    </div>
  );
}

export default Campus;
