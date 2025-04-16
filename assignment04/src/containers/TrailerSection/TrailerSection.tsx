import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import {
  TRAILER_TITLE,
  TRAILER_SIGNIN_PROMPT,
  TRAILER_LINK_TEXT,
  TRAILER_IMAGE,
  TRAILER_IMAGE_ALT,
  TRAILER_MOVIE_TITLE,
  TRAILER_MOVIE_DESCRIPTION,
  WATCH_NOW_LABEL,
  LOCAL_STORAGE_KEYS,
  ROUTES,
} from "../../Constants/APP_CONSTANTS";
import "./TrailerSection.scss";

const TrailerSection = () => {
  const navigate = useNavigate();
  const isLoggedIn =
    localStorage.getItem(LOCAL_STORAGE_KEYS.IS_LOGGED_IN) === "true";
  const handleWatchNow = () => {
    if (isLoggedIn) {
      navigate(ROUTES.NOW_SHOWING);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };
  return (
    <>
      <div className="trailer-section-container">
        <h1>{TRAILER_TITLE}</h1>
        <p>
          {TRAILER_SIGNIN_PROMPT}
          <span className="sign-in">
            {!isLoggedIn && <Link to="/login"> {TRAILER_LINK_TEXT}</Link>}
          </span>
        </p>
        <div className="trailer-main-content">
          <div className="trailer-image">
            <img src={TRAILER_IMAGE} alt={TRAILER_IMAGE_ALT} />
          </div>
          <div className="trailer-description-container">
            <div className="trailer-description-title">
              <h1>{TRAILER_MOVIE_TITLE}</h1>
            </div>
            <div className="trailer-description-content">
              {TRAILER_MOVIE_DESCRIPTION}
            </div>
            <Button
              name={WATCH_NOW_LABEL}
              className="watch-now"
              type="button"
              onClick={handleWatchNow}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrailerSection;
