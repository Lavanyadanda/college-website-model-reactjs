import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} />
            <div className='caption'>
                <img src={program_icon_1}/>
                <p>graduation dregree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} />
            <div className='caption'>
                <img src={program_icon_1}/>
                <p>master dregree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} />
            <div className='caption'>
                <img src={program_icon_3}/>
                <p>post graduation dregree</p>
            </div>
        </div>
    </div>
  )
}

export default Program
