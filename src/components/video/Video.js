import React, {useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import './video.css'

const Video = () => {
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
       src="https://v16-webapp.tiktok.com/a6b405130db066385ee6a70c9fcc14bf/63e09ffb/video/tos/maliva/tos-maliva-ve-0068c799-us/8033d7da636548429d70afd9a4807f52/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=7802&bt=3901&cs=0&ds=3&ft=-ElcommJPD12NJDlX8-UxItFhYKt3wv25IcAV&mime_type=video_mp4&qs=0&rc=N2llaDk6OzY0ZDVnM2c1Z0BpajU3Nzs6ZmhnaDMzZzczNEA0YTRhM15jNjQxYmIyNjBhYSM0anFqcjQwXjNgLS1kMS9zcw%3D%3D&l=202302060036330164F50174A796CF4D5C&btag=80000"
       ></video>
       <Sidebar likes={15} shares={6} comments={8}/>
      <Footer channel='Chebs007' description='The One' song='Oceans'/>
    </div>
  )
}

export default Video