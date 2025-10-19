import "./Video.css";
import video from "./../../assets/images/video.png";
import playbutton from "./../../assets/icons/video-play-button.svg";

const Video = () => {
  return (
    <div className="apartmentvid">
      <h2 className="gantari">Video</h2>
      <img src={video} alt="video of apartment" id="videopng" />
      <img src={playbutton} alt="" id="playbutton" />
    </div>
  );
};

export default Video;
