import { Link, useNavigate } from "react-router-dom";
import {
  LOGO_IMAGE,
  LOCAL_STORAGE_KEYS,
  ROUTES,
} from "../../Constants/APP_CONSTANTS";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const isLoggedIn =
    localStorage.getItem(LOCAL_STORAGE_KEYS.IS_LOGGED_IN) === "true";
  const userEmail = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_EMAIL);

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.IS_LOGGED_IN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_EMAIL);
    navigate("/");
  };
  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={LOGO_IMAGE} alt="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to={ROUTES.HOME}>{ROUTES.HOME_HEADER}</Link>
          </li>
          <li>
            <Link to={ROUTES.ALL_MOVIES}>{ROUTES.ALL_MOVIES_HEADER}</Link>
          </li>
          {isLoggedIn && (
            <li className="now-showing">
              <Link to={ROUTES.NOW_SHOWING}>{ROUTES.NOW_SHOWING_HEADER}</Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="user">
        {isLoggedIn ? (
          <>
            <span className="user-email">{userEmail?.split("@")[0]} | </span>
            <button className="logout-btn" onClick={handleLogout}>
              {ROUTES.LOGOUT_HEADER}
            </button>
          </>
        ) : (
          <Link to={ROUTES.LOGIN}>{ROUTES.LOGIN_HEADER}</Link>
        )}
      </div>
    </header>
  );
}
