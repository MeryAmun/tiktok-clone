import React,{useState, useEffect } from 'react'
import './App.css';
import Video from './components/video/Video';
import { collection, query, onSnapshot } from "firebase/firestore";
import db from './firebase';

function App() {
  const [videos, setVideos] = useState([])


useEffect(() => {
  const q = query(collection(db, 'videos'))
  onSnapshot(q, (querySnapshot) => {
    setVideos(querySnapshot.docs.map(doc =>  doc.data()
    ))
  })
},[])



  return (
    <div className="app">
     <div className="app__videos">
      {
        videos.map(({url, channel, messages, shares, description,song, likes},index) => (
         <Video key={index}
         url={url}
         channel={channel}
         likes={likes}
         shares={shares}
         song={song}
         messages={messages}
         description={description}/>
        ))
      }
      
     </div>
    </div>
  );
}

export default App;
