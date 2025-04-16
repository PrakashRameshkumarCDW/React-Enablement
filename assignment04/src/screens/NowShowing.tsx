import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import {
  NOW_SHOWING_TITLE,
  NOW_SHOWING_HEADING,
  NOW_SHOWING_VIDEO_URL,
  SINTEL_DESCRIPTION,
  SINTEL_BACKGROUND_IMAGE,
} from "../Constants/APP_CONSTANTS";

import "./NowShowing.scss";
const NowShowing = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <div className="nowShowing-container">
        <h6 className="now-showing-text">{NOW_SHOWING_TITLE}</h6>
        <div className="heading-name">{NOW_SHOWING_HEADING}</div>
        <div className="sintel-image-wrapper">
          <div className="sintel-image">
            {isPlaying ? (
              <video
                className="sintel-video"
                controls
                autoPlay
                src={NOW_SHOWING_VIDEO_URL}
              />
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="play-icon"
                  onClick={() => setIsPlaying(true)}
                />
                <img src={SINTEL_BACKGROUND_IMAGE} alt="sintel image" />
              </>
            )}
          </div>
        </div>
        <p className="sintel-description">{SINTEL_DESCRIPTION}</p>
      </div>
    </>
  );
};
export default NowShowing;
