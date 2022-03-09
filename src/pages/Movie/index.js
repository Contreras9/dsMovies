import MoviePage from '../../components/MoviePage';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${params.movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
  //     .then(response => {
  //       const data = response.data;
  //       setMovies(data);
  //       setPage({
  //         first : 0,
  //         last : Math.ceil(movies.length / max_movies_per_page) -1,
  //         number: 0,
  //         totalPages: Math.ceil(movies.length / max_movies_per_page)
  //       })
  //     })
  }, [])

  console.log(movie)

  return (
    <MoviePage movie={movie} />
  )
}

export default Movie;