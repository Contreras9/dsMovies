import MovieScore from "../MovieScore";
import { Link } from "react-router-dom";

import './styles.css';


function MovieCard({ movie }) {
  return (
    <div className="container">
      <img className="dsmovie-movie-card-image" src={movie.poster_image_url} alt={movie.title} />
      <div className="dsmovie-card-bottom-container">
        <br />
        <h3>{movie.title}</h3>
        <MovieScore score={movie.critics_score} />
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary dsmovie-btn">Avaliar</div>
        </Link>
      </div>
      <br />
    </div >
  )
}

export default MovieCard;