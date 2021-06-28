import "./App.css";
import Video from "./components/Video.js";

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url="https://cdn.kapwing.com/final_60d8ed020f4aac0062b3382f_981909.mp4"
          channel="magic888"
          description="I am the description"
          song="I am the song !!!"
          like={100}
          message={200}
          share={300}
        />
        <Video
          url="https://cdn.kapwing.com/final_60d8ed020f4aac0062b3382f_981909.mp4"
          channel="magic888"
          description="I am the description"
          song="I am the song !!!"
          like={100}
          message={200}
          share={300}
        />
      </div>
    </div>
  );
}

export default App;
