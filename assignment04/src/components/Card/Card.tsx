import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";

const Card = ({
  movieName,
  likes,
  imgUrl,
  onClick,
  onLikeClick,
}: {
  movieName: string;
  likes: number;
  imgUrl: string;
  onClick: () => void;
  onLikeClick: () => void;
}) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-image-wrapper" onClick={onClick}>
          <img src={imgUrl} alt={movieName} />
        </div>
        <div className="name-container">
          <h6 className="movie-name-heading">{movieName}</h6>
          <FontAwesomeIcon
            icon={faThumbsUp}
            className=""
            onClick={(e) => {
              e.stopPropagation();
              onLikeClick();
            }}
          />
        </div>
        <div className="likes-container">{likes} Likes</div>
      </div>
    </>
  );
};
export default Card;
