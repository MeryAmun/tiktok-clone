import React, {useState, useRef } from 'react';
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
       src="https://v16-webapp.tiktok.com/8276cee9fb829fa69782d626cb956505/63ddd680/video/tos/useast2a/tos-useast2a-pve-0068/oMJ6QyzQYUjIfbTunJNBR0eqFKD9raE8AhBWSI/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4862&bt=2431&cs=0&ds=3&ft=IecA0ooED12NvYrxrZIxRJk_WlJG-UjNSCcpi9&mime_type=video_mp4&qs=0&rc=aWZpZDU6ZzxlNDtnPGY7NEBpMzZraGQ6Zml0aTMzNzczM0AuYDQ1Ly4wXjAxYjUyXi8xYSNfM2tucjQwazFgLS1kMTZzcw%3D%3D&l=2023020321520285D617C2A79C92600B0D&btag=80000"
       ></video>
        {/* video footer */}
        {/* sidebar */}
    </div>
  )
}

export default Video