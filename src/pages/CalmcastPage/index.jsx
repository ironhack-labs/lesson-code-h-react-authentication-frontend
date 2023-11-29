import * as React from "react";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./CalmcastPage.css";
import play from "../../assets/icons/dark/Play Button.png";
import progress from "../../assets/slider/2.png";
import soundwaves from "../../assets/icons/light/soundwaves.png";
import luna from "../../assets/luna/breathe.png";
import song from "../../assets/sounds/chill-out-sound.mp3";
import pause from "../../assets/icons/dark/pause2.png";

function CalmcastPage() {
  const [audio] = useState(new Audio(song));
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // useEffect hook to add a cleanup function
  useEffect(() => {
    return () => {
      audio.pause(); // Pause the audio when the component unmounts
    };
  }, [audio]);

  return (
    <div class="container">
      <div className="calmcast-container"></div>
      <Link to="/exercises" className="back-link">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div className="calmcast">
        <div className="calmcast-1">
          <img src={luna} />
          <div className="calm-title">AUDIO</div>
        </div>

        <div className="calmcast-2">
          <div>
            Relax and unwind with our daily curated calmcast. Every day we
            choose a podcast, audio clip, or song to encourage you to think,
            reflect, or unwind.
          </div>
        </div>

        <div className="calmcast-3">
          <img src={soundwaves} alt="soundwaves" />
          0:35 / 3:43
          <img src={progress} alt="play button" />
        </div>

        <div className="calmcast-4">
          {isPlaying ? (
            <img onClick={playPause} src={pause} alt="pause button" />
          ) : (
            <img onClick={playPause} src={play} alt="play button" />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CalmcastPage;
