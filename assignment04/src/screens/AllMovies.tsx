import MovieContainer from "../containers/MovieContainer/MovieContainer";
import SelectedMovie from "../containers/SelectedMovie/SelectedMovie";
import { getShortTeasers } from "../services/MovieService/getShortTeasers";
import { useState, useEffect } from "react";
import withAdvertisement from "../components/WithAdvertisement/WithAdvertisement";
import { SELECTED_MOVIE_AD_CONFIG } from "../Constants/APP_CONSTANTS";
import { API_ENDPOINTS } from "../Constants/API_CONSTANTS";
import "./AllMovies.scss";

const SelectedMovieWithAd = withAdvertisement(
  SelectedMovie,
  SELECTED_MOVIE_AD_CONFIG
);

const AllMovies = () => {
  const [movies, setMovies] = useState<
    {
      id: number;
      name: string;
      description: string;
      actors: string[];
      imgUrl: string;
      likes: number;
    }[]
  >([]);
  const [selectedMovieId, setSelectedMovieId] = useState<number>(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getShortTeasers(API_ENDPOINTS.MOVIES);
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const handleMovieSelect = (movieId: number) => {
    setSelectedMovieId(movieId);
  };

  const handleLike = (movieId: number) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === movieId ? { ...movie, likes: movie.likes + 1 } : movie
      )
    );
  };

  const selectedMovie =
    selectedMovieId !== null
      ? movies.find((m) => m.id === selectedMovieId)
      : undefined;

  return (
    <div className="main-content">
      <div className="left-content">
        <MovieContainer
          movies={movies}
          onMovieSelect={handleMovieSelect}
          onLikeClick={handleLike}
        />
      </div>
      <div className="right-content">
        <SelectedMovieWithAd
          movie={selectedMovie}
          onLikeClick={handleLike}
          triggerKey={selectedMovieId}
        />
      </div>
    </div>
  );
};

export default AllMovies;
