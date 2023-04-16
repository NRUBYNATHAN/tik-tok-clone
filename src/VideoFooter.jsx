import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Marquee from "react-fast-marquee";
function VideoFooter({channel,description,song}) {
  return (
    <div className="videofooter">
      <div className="videofooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videofooter_ticker">
            <MusicNoteIcon className="videofooter_icon"/>
            <div className="morquee">
            <Marquee speed="100" gradientColor="[168,169,173]">
               <p>{song}</p>
            </Marquee>
            </div>
          
        </div>
      </div>
      <img className="videofooter_record" src="https:static.thenounproject.com/png/934821-200.png"/>
    </div>
  )
}

export default VideoFooter
