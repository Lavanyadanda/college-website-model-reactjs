// import React,{useRef} from 'react'
// import './Videoplayer.css'
// import video from '../../assets/video.mp4'
// const Videoplayer = ({playstate,setPlaystate}) => {

//     const player=useRef(null);
//     const closeplayer=(e)=>{
//         if(e.target===player.current){
//             setPlaystate(false);

//         }
//     }
//   return (
//     <div  onClick={closeplayer}className={`video-player ${playstate?'':'hide'}`} ref={player}>
//       <video src={video}  muted controls></video>
//     </div>
//   )
// }

// export default Videoplayer

import React, { useRef, useEffect } from 'react';
import './Videoplayer.css';
import video from '../../assets/video.mp4';

const Videoplayer = ({ playstate, setPlaystate }) => {
    const player = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (playstate && videoRef.current) {
            videoRef.current.play(); // Play only when state is true
        } else if (!playstate && videoRef.current) {
            videoRef.current.pause(); // Pause when state is false
        }
    }, [playstate]);

    const closeplayer = (e) => {
        // Hide the player when clicking outside the video
        if (e.target === player.current) {
            setPlaystate(false);
        }
    };

    return (
        <div 
            className={`video-player ${playstate ? 'show' : 'hide'}`} 
            ref={player} 
            onClick={closeplayer}
        >
            <video ref={videoRef} src={video} muted controls></video>
        </div>
    );
};

export default Videoplayer;
