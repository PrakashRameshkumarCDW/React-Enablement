import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./SelectedMovie.scss";
import { AdProps } from "../../components/WithAdvertisement/WithAdvertisement";

const SelectedMovie = ({
  movie,
  onLikeClick,
  adText,
  adImage,
}: {
  movie?: {
    id: number;
    name: string;
    description: string;
    actors: string[];
    imgUrl: string;
    likes: number;
  };
  onLikeClick: (id: number) => void;
} & AdProps) => {
  if (!movie)
    return <div className="selected-movie">Select a movie to view details</div>;

  return (
    <div className="selected-movie">
      {adImage ? (
        <div className="advertisement-container">
          <img src={adImage} alt="advertisement image" />
        </div>
      ) : (
        <>
          <div className="movie-title-container">
            <h2 className="movie-title">{movie.name}</h2>
            <div className="circle-icon">
              <FontAwesomeIcon
                icon={faThumbsUp}
                onClick={() => onLikeClick(movie.id)}
              />
            </div>
          </div>
          <div className="movie-likes">{movie.likes} Likes</div>
          <div className="movie-image-wrapper">
            <img src={movie.imgUrl} alt={movie.name} />
          </div>
          <div className="movie-description">{movie.description}</div>
          <div className="actors-section">
            <h3>ACTORS</h3>
            <ul className="actor-list">
              {movie.actors.map((actor) => (
                <li key={actor}>{actor}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div className="advertisement-text">{adText}</div>
    </div>
  );
};

export default SelectedMovie;
