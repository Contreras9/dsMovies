import MovieStars from "../MovieStars";
import './styles.css';


function MovieScore({ score }) {
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MovieStars score={score} />
      <p className="dsmovie-score-count">5 reviews</p>
    </div>
  )
}
export default MovieScore;