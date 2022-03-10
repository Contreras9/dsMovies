import axios from "axios";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";

function Listing() {

  const max_movies_per_page = 4;

  const [page, setPage] = useState({
    first : 0,
    last : 0,
    number: 0,
    totalPages: 0
  })
// TODO fix totalPages functionality

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9292/movies`)
      .then(response => {
        const data = response.data;
        setMovies(data);
        setPage({
          first : 0,
          last : Math.ceil(data.length / max_movies_per_page) -1,
          number: 0,
          totalPages: Math.ceil(data.length / max_movies_per_page)
        })
      })
  }, [])

  const handlePageChange = (newPageNumber) => {
    setPage(p => { return {...p, number : newPageNumber}});
  }

  

  return (
    <>
      <Pagination page={page} onChange={handlePageChange} />
      <div className="container">
        <div className="row">
          {movies.slice(page.number*max_movies_per_page,(page.number+1)*max_movies_per_page).map(movie => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Listing;