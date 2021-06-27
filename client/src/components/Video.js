import React, { useRef, useState } from "react";
import "../styling/Video.css";
import VideoFooter from "./VideoFooter.js";

const Video = () => {
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
        src="https://cdn.kapwing.com/final_60d8ed020f4aac0062b3382f_981909.mp4"
      ></video>
      <VideoFooter />
    </div>
  );
};

export default Video;
