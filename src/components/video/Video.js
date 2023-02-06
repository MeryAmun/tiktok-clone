import React, {useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import './video.css'




const Video = ({url, channel, messages, shares, description,song, likes}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const onVideoPress = () => {
       if(playing){
        videoRef.current.pause()
        setPlaying(false)
       }else{
        videoRef.current.play()
        setPlaying(true)
       }
    }

  return (
    <div className='video'>
       <video 
       className='video__player'
       loop
       onClick={onVideoPress}
       ref={videoRef}
       src={url}
       ></video>
       <Sidebar likes={likes} shares={shares} messages={messages}/>
      <Footer channel={channel} description={description} song={song}/>
    </div>
  )
}

export default Video