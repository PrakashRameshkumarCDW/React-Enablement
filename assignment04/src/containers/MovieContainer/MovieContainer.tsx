import { useState } from "react";
import Button from "../../components/Button/Button";
import "./MovieContainer.scss";
import Card from "../../components/Card/Card";
const MovieContainer = ({
  movies,
  onMovieSelect,
  onLikeClick,
}: {
  movies: {
    id: number;
    name: string;
    description: string;
    actors: string[];
    imgUrl: string;
    likes: number;
  }[];
  onMovieSelect: (id: number) => void;
  onLikeClick: (id: number) => void;
}) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <div className="heading">All Movies</div>
      <div className="card-container">
        {movies.slice(0, visibleCount).map((movie) => (
          <Card
            key={movie.id}
            movieName={movie.name}
            likes={movie.likes}
            imgUrl={movie.imgUrl}
            onClick={() => onMovieSelect(movie.id)}
            onLikeClick={() => onLikeClick(movie.id)}
          />
        ))}
      </div>
      {visibleCount < movies.length && (
        <Button
          name="LOAD MORE"
          className="watch-now"
          type="button"
          onClick={handleLoadMore}
        />
      )}
    </>
  );
};
export default MovieContainer;
