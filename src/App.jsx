import { useEffect, useState } from 'react';
import './App.css'
import { Videos } from './Videos';
import axios from './axios';

function App() {
const[videos,setVideos]=useState([])
  useEffect(()=>{
       async function fecthPosts(){
          const response=await axios.get("/getposts");
          setVideos(response.data)
          return response;
       }
       fecthPosts();
  },[])

  console.log(videos)
  return (

    <div className="app">
      <div className="app_videos">
        {videos.map(({url,channel,description,song,likes,messages,shares})=>(<Videos
           url={url}
           channel={channel}
           description={description}
           song={song}
           likes={likes}
           messages={messages}
           shares={shares}
        />))}
    
     </div>
     
    </div>
  )
}

export default App

