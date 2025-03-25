import React from 'react'
import './Testimonal.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useRef ,useState,useEffect} from 'react';
const Testimonal = () => {
    const slider=useRef(null);

const [tx, setTx] = useState(0); // Use state to persist the `tx` value
const slideForward = () => {
  if (tx > -50) {
      setTx(prevTx => {
          const newTx = prevTx - 25;
          slider.current.style.transform = `translateX(${newTx}%)`;
          return newTx;
      });
  }
};


const slideBackward = () => {
  setTx(prevTx => {
    const newTx = prevTx < 0 ? prevTx + 25 : prevTx;
    return newTx;
  });
};

// Keep your useEffect as is:
useEffect(() => {
  if (slider.current) {
    slider.current.style.transform = `translateX(${tx}%)`;
  }
}, [tx]);

// const slideBackward = () => {
//   if (tx < 0) {
//       setTx(prevTx => {
//           const newTx = prevTx +25;
//           slider.current.style.transform = `translateX(${newTx}%)`;
//           return newTx;
//       });
//   }
// };
// useEffect(() => {
//   if (slider.current) {
//       slider.current.style.transform = `translateX(${tx}%)`;
//   }
// }, [tx]);  // Runs whenever `tx` changes
return (
  <div className="testimonal">
      <img onClick={slideBackward} src={back_icon} className="back-btn" alt="Back" />
      <div className="slider">
          <ul ref={slider}>
              <li>
                  <div className="slide">
                      <div className="user-info">
                          <img src={user_1} alt="User 1" />
                          <div>
                              <h3>William Name</h3>
                              <span>Edusity USA College</span>
                          </div>
                      </div>
                      <p>Testimonial 1</p>
                  </div>
              </li>
              <li>
                  <div className="slide">
                      <div className="user-info">
                          <img src={user_2} alt="User 2" />
                          <div>
                              <h3>William Name</h3>
                              <span>Edusity USA College</span>
                          </div>
                      </div>
                      <p>Testimonial 2</p>
                  </div>
              </li>
              <li>
                  <div className="slide">
                      <div className="user-info">
                          <img src={user_3} alt="User 3" />
                          <div>
                              <h3>William Name</h3>
                              <span>Edusity USA College</span>
                          </div>
                      </div>
                      <p>Testimonial 3</p>
                  </div>
              </li>
              <li>
                  <div className="slide">
                      <div className="user-info">
                          <img src={user_4} alt="User 4" />
                          <div>
                              <h3>William Name</h3>
                              <span>Edusity USA College</span>
                          </div>
                      </div>
                      <p>Testimonial 4</p>
                  </div>
              </li>
          </ul>
      </div>
      <img onClick={slideForward} src={next_icon} className="next-btn" alt="Next" />
  </div>
);
};


export default Testimonal
