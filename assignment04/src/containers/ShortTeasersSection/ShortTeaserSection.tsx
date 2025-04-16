import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { getShortTeasers } from "../../services/MovieService/getShortTeasers";
import { AdProps } from "../../components/WithAdvertisement/WithAdvertisement";
import "./ShortTeaserSection.scss";
import { API_ENDPOINTS } from "../../Constants/API_CONSTANTS";

const ShortTeaserSection = ({ adText, adImage }: AdProps) => {
  const [shortTeasers, setShortTeasers] = useState<
    {
      posterImg: string;
      movieName: string;
      videoUrl: string;
    }[]
  >([]);

  const [activeVideo, setActiveVideo] = useState<string>("");

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    const getAllTeasers = async () => {
      const data = await getShortTeasers(API_ENDPOINTS.SHORT_TEASERS);
      setShortTeasers(data);
    };
    getAllTeasers();
  }, []);

  const [pendingVideoUrl, setPendingVideoUrl] = useState<string | null>(null);

  const handlePlayVideo = (videoUrl: string, movieName: string) => {
    setActiveVideo(movieName);
    setPendingVideoUrl(videoUrl);
  };

  useEffect(() => {
    if (pendingVideoUrl && videoRefs.current[pendingVideoUrl]) {
      const video = videoRefs.current[pendingVideoUrl];
      if (video) {
        video.currentTime = 0;
        video.play();

        const pauseTimer = setTimeout(() => {
          video.pause();

          const resumeTimer = setTimeout(() => {
            video.play();
            setPendingVideoUrl(null);
          }, 4000);

          return () => clearTimeout(resumeTimer);
        }, 5000);

        return () => clearTimeout(pauseTimer);
      }
    }
  }, [pendingVideoUrl]);

  return (
    <div className="short-teaser-section-container">
      <h1>Short Teasers</h1>
      <div className="short-teaser-card-container">
        {shortTeasers.map((teaser, index) => (
          <div className="teaser-card" key={index}>
            <div className="teaser-image">
              {activeVideo === teaser.movieName && adImage && (
                <div className="advertisement-container">
                  <img src={adImage} alt="advertisement image" />
                </div>
              )}
              {activeVideo === teaser.movieName ? (
                <video
                  ref={(el) => {
                    videoRefs.current[teaser.videoUrl] = el;
                  }}
                  src={teaser.videoUrl}
                  autoPlay
                  controls
                  className="teaser-video"
                />
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faCirclePlay}
                    className="play-icon"
                    onClick={() =>
                      handlePlayVideo(teaser.videoUrl, teaser.movieName)
                    }
                  />
                  <img src={teaser.posterImg} alt={teaser.movieName} />
                </>
              )}
            </div>
            <p className="teaser-movie-name">{teaser.movieName}</p>
            <div className="advertisement-text">
              {activeVideo === teaser.movieName && adText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortTeaserSection;
