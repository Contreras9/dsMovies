import MovieStars from "../MovieStars";
import './styles.css';


function MovieScore({ score, runTime}) {
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MovieStars score={score} />
      <p className="dsmovie-score-count">{runTime} minutes</p> 
      {/* TODO what is the above line for? */}
    </div>
  )
}
export default MovieScore;