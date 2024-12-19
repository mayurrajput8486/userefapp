import React from 'react'
import freevideo from '../Components/video.mp4'
import { useRef } from 'react'
const Video = () => {
    const videoRef = useRef(null)

    const playVideo = () =>{
        videoRef.current.play()
    }

    const pauseVideo = () =>{
        videoRef.current.pause()
    }
  return (
    <div>
        <h2>Learn useRef () Hook</h2>
        <video
            ref={videoRef}
            width={500}>
                <source src={freevideo}/>
        </video>
        <br/>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
    </div>
  )
}

export default Video