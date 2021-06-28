import React, { useRef, useState } from "react";
import "../styling/Video.css";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";

const Video = ({ url, channel, description, song, like, message, share }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        loop
        onClick={handleVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar like={like} message={message} share={share} />
    </div>
  );
};

export default Video;
