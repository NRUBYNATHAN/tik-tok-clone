import "./VideoSidebar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
function VideoSidebar({likes,messages,shares}) {
  const[liked,setLiked]=useState(false)
  return (
    <div className="videosidebar">
      <div className="videosidebar_button">
        {liked ? (<FavoriteIcon fontSize="large" onClick={()=>setLiked(false)}/>) : (<FavoriteBorderIcon fontSize="large" onClick={()=>setLiked(true)}/>)}
         
         <p>{liked? +likes+1:likes}</p>
      </div>
      <div className="videosidebar_button">
      <MessageIcon fontSize="large"/>
      <p>{messages}</p>
        </div>
        <div className="videosidebar_button">
        <ShareIcon fontSize="large"/>
        <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar
