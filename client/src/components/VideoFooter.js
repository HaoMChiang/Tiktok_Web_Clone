import React from "react";
import "../styling/VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
// import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          {/* <Ticker mode="smooth">
            {({ index }) => {
              <>
                <p>I am a song !!!</p>
              </>;
            }}
          </Ticker> */}
          <p>{song}</p>
          <img
            src="https://static.thenounproject.com/png/934821-200.png"
            className="videoFooter_record"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
