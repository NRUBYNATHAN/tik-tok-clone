
import { useRef } from "react";
import "./Video.css"
import { useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
export function Videos({url,channel,description,song,likes,messages,shares}) {
  const[playing,setPlaying]=useState(false)
  const videoRef=useRef(null);

  const handleVideoPress=()=>{
if(playing){
  videoRef.current.pause();
  setPlaying(false)
}else{
  videoRef.current.play();
  setPlaying(true)
}
  }
  return (
     <div className="video">
       <video
       onClick={handleVideoPress}
       ref={videoRef}
          className="video_player"
          loop
          src={url} type="video/mp4" autoPlay>

          </video>
          <VideoFooter channel={channel} description={description} song={song}/>
          <VideoSidebar likes={likes} messages={messages} shares={shares}/>
     
     </div>
  );
}
