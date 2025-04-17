import sintelBackground from "../assets/sindel-background.png";
import Logo from "../assets/logo.png";
import advertisementSmallOne from "../assets/AdvertisementSmall1.png";
import advertisementSmallTwo from "../assets/AdvertisementSmall2.png";
import advertisementBigOne from "../assets/AdvertisementBig1.png";
import advertisementBigTwo from "../assets/AdvertisementBig2.png";
import LanguageSelectionImage from "../assets/other languages.png";

export const AD_IMAGES = [advertisementSmallOne, advertisementSmallTwo];
export const BIG_AD_IMAGES = [advertisementBigOne, advertisementBigTwo];

export const AD_CONFIG = {
  adImages: AD_IMAGES,
  initialAdText: "Advertisement in 0.05",
  adLabel: "Advertisement in",
  resumeLabel: "Video Resumes in",
  countdownStart: 5,
  resumeCountdownStart: 3,
};

export const SELECTED_MOVIE_AD_CONFIG = {
  adImages: BIG_AD_IMAGES,
  initialAdText: "Advertisement in 00:15",
  adLabel: "Advertisement in",
  resumeLabel: "Resumes in",
  countdownStart: 14,
  resumeCountdownStart: 5,
};


export const NOW_SHOWING_TITLE = "Now Showing";
export const NOW_SHOWING_HEADING = "Sintel";
export const NOW_SHOWING_VIDEO_URL =
  "https://tympanus.net/Development/SeatPreview/media/sintel.mp4";

export const SINTEL_DESCRIPTION = `Sintel tells the story of a friendship between a girl named Sintel, a
baby dragon and the desperate lengths she will go to when that
friendship is taken from her. Sintel is created by Blender in 2010 as
a pet project to demonstrate Blender capabilities.`;

export const SINTEL_BACKGROUND_IMAGE = sintelBackground;


export const ROUTES = {
   HOME: "/",
   ALL_MOVIES: "/allMovies",
   NOW_SHOWING: "/showTime",
    LOGIN: "/login",
    HOME_HEADER: "HOME",
    ALL_MOVIES_HEADER: "ALL MOVIES",
    NOW_SHOWING_HEADER: "NOW SHOWING",
    LOGIN_HEADER: "LOGIN",
    LOGOUT_HEADER: "Logout",
};


export const LOCAL_STORAGE_KEYS = {
  IS_LOGGED_IN: "isLoggedIn",
  USER_EMAIL: "userEmail",
};

export const LOGO_IMAGE = Logo;

export const LOTTERY_INSTRUCTIONS =
  "Your Mobile Number can win you exciting prizes";

export const VALIDATION_MESSAGE = "Please Enter a valid 10-digit Mobile Number";

export const WINNING_MESSAGE =
  "Hurray! You Won a free ticket to Blind Date on Wednesday";

export const LOSING_MESSAGE = "Sorry :( Better Luck Next Time";

export const BUTTON_LABEL = "I'm Feeling Lucky";



export const OTHER_LANGUAGES_TEXT = "View in Other Languages";
export const LANGUAGE_SELECTION_IMAGE = LanguageSelectionImage;
export const LANGUAGE_SELECTION_IMAGE_ALT = "view in other languages";

import TrailerImage from "../assets/sindel-background.png";

export const TRAILER_TITLE = "Trailers";

export const TRAILER_SIGNIN_PROMPT = "You need to sign in to view Trailers.";

export const TRAILER_LINK_TEXT = "Sign In Now";

export const TRAILER_IMAGE = TrailerImage;
export const TRAILER_IMAGE_ALT = "TrailerImage";

export const TRAILER_MOVIE_TITLE = "Sintel";

export const TRAILER_MOVIE_DESCRIPTION = `Sintel tells the story of a friendship between a girl named
Sintel, a baby dragon and the desperate lengths she will go to
when that friendship is taken from her. Sintel is created by
Blender in 2010 as a pet project to demonstrate Blender
capabilities.`;

export const WATCH_NOW_LABEL = "WATCH NOW";