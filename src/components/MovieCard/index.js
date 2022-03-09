import MovieScore from "../MovieScore";
import { Link } from "react-router-dom";

import './styles.css';

// TODO add placeholder image for broken poster URLs
function MovieCard({ movie }) {
  return (
    <div className="container">
      <Link to={`/movie/${movie.id}`}>
      <img className="dsmovie-movie-card-image" src={movie.poster_image_url} alt={movie.title} />
      </Link>
      <div className="dsmovie-card-bottom-container">
        <br />
        <Link to={`/movie/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
        <MovieScore score={movie.critics_score} />
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary dsmovie-btn">Review</div>
        </Link>
      </div>
      <br />
    </div >
  )
}

export default MovieCard;