import MovieScore from "../MovieScore";
import { Link } from "react-router-dom";

import './styles.css';

// TODO add placeholder image for broken poster URLs
function MoviePage({ movie }) {
  return (
    <div className="big-container">
      <img className="dsmovie-movie-card-image" src={movie.poster_image_url} alt={movie.title} />
      <div className="dsmovie-card-bottom-container">
        <br />
        <h2>{movie.title}</h2>
        <MovieScore score={movie.critics_score} />
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary dsmovie-btn">Review</div>
        </Link>
      </div>
      <br />
    </div >
  )
}

export default MoviePage;