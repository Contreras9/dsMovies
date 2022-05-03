import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import './style.css'



function Movie() {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState({title: " ", actors: [], reviews: [], positive_review_ratio: 0})
  const [registerCard, setRegisterCard] = useState(0)

  function submitReview(event) {
	  event.preventDefault()
	  axios.post("http://localhost:9292/critic_by_name", {name : event.target[6].value})
      .then(response => {
        const critic = response.data;
		console.log(critic);
		axios.post("http://localhost:9292/reviews", {content : event.target[5].value, critic_id: critic.id, movie_id: movieDetails.id})
		.then(response => {
		  const review = response.data;
		  console.log(review)
		  setMovieDetails(movieDetails => { return {...movieDetails, reviews: [...movieDetails.reviews, review]}});
		})
      })

  }

  useEffect(() => {
    axios.get(`http://localhost:9292/movies/${params.movieId}`)
      .then(response => {
        const data = response.data;
        setMovieDetails(data);
      })
  }, [])

  return (
    // <FormCard movieId={`${params.movieId}`} />
    <div className="container">
	        <div className="heading-section">
	            <h2>{movieDetails.title}</h2>
	        </div>
	        <div className="row">
	        	<div className="col-md-6">
	        		<div id="slider" className="owl-carousel product-slider">
						<div className="item">
						  	<img src={movieDetails.poster_image_url} width="540px" height="810px"/>
						</div>
					</div>
	        	</div>
	        	<div className="col-md-6">
	        		<div className="product-dtl">
        				<div className="product-info">
		        			<div className="product-name">Description</div>
		        			<div className="reviews-counter">
								<div className="rate">
								    <input type="radio" id="star5" name="rate" value="5" checked />
								    <label title="text">5 stars</label>
								    <input type="radio" id="star4" name="rate" value="4" checked />
								    <label title="text">4 stars</label>
								    <input type="radio" id="star3" name="rate" value="3" checked />
								    <label title="text">3 stars</label>
								    <input type="radio" id="star2" name="rate" value="2" />
								    <label title="text">2 stars</label>
								    <input type="radio" id="star1" name="rate" value="1" />
								    <label title="text">1 star</label>
								  </div>
								<span>{movieDetails.reviews.length} Reviews</span>
							</div>
		        			<div className="product-price-discount"><span>{movieDetails.positive_review_ratio}</span></div>
		        		</div>
	        			<p>{movieDetails.description}</p>
	        		</div>
	        	</div>
	        </div>
	        <div className="product-info-tabs">
		        <ul className="nav nav-tabs" id="myTab" role="tablist">
				  	<li className="nav-item">
				    	<a className={"nav-link " + ((registerCard === 0) ? "active" : "")} id="actor-tab" data-toggle="tab" href="#description" role="tab" aria-controls="actor" aria-selected="true" onClick={ () => setRegisterCard(0)}>Actors ({movieDetails.actors.length})</a>
				  	</li>
				  	<li className="nav-item">
				    	<a className={"nav-link " + ((registerCard === 1) ? "active" : "")} id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false" onClick={ () => setRegisterCard(1)}>Reviews ({movieDetails.reviews.length})</a>
				  	</li>
				</ul>
				<div className="tab-content" id="myTabContent">
				  	<div className={"tab-pane fade " + ((registerCard === 0) ? "show active" : "")} id="actor" role="tabpanel" aria-labelledby="review-tab">
				  		<div className="review-heading">ACTORS</div>
              <hr/>
              <ul>
                {movieDetails.actors.map(actor => (
					<p className="row"><hr/><div className="col-md-3"><img src={actor.profile_image_url} width="80px" height="80px"/><b style={{margin: "20px"}}>{actor.name}</b></div><div className="col-md-7">{actor.filmography_count} Films</div></p>
				))}
              </ul>				  		
				  	</div>
            <div className={"tab-pane fade " + ((registerCard === 1) ? "show active" : "")} id="review" role="tabpanel" aria-labelledby="review-tab">
				  		<div className="review-heading">REVIEWS</div>

        		
              { (movieDetails.reviews.length === 0) ? (<p className="mb-20">There are no reviews yet.</p>) : (
                <div>
                    {movieDetails.reviews.map(review => (
					<p className="row"><hr/><div className="col-md-3"><img src={review.critic.image} width="80px" height="80px"/><b style={{margin: "20px"}}>{review.critic.name}</b></div><div className="col-md-7">{review.content}</div></p>
					))}
                </div> )
              }
              <hr/>
				  		<form className="review-form" onSubmit={submitReview}>
		        			<div className="form-group">
			        			<label>Your rating</label>
			        			<div className="reviews-counter">
									<div className="rate">
									    <input type="radio" id="star5" name="rate" value="5" />
									    <label title="text">5 stars</label>
									    <input type="radio" id="star4" name="rate" value="4" />
									    <label title="text">4 stars</label>
									    <input type="radio" id="star3" name="rate" value="3" />
									    <label title="text">3 stars</label>
									    <input type="radio" id="star2" name="rate" value="2" />
									    <label title="text">2 stars</label>
									    <input type="radio" id="star1" name="rate" value="1" />
									    <label title="text">1 star</label>
									</div>
								</div>
							</div>
		        			<div className="form-group">
			        			<label>Your message</label>
			        			<textarea className="form-control" rows="10"></textarea>
			        		</div>
			        		<div className="row">
				        		<div className="col-md-6">
				        			<div className="form-group">
					        			<input type="text" name="" className="form-control" placeholder="Name*" />
					        		</div>
					        	</div>
				        		<div className="col-md-6">
					        	</div>
					        </div>
					        <button className="round-black-btn">Submit Review</button>
			        	</form>
				  	</div>
				</div>
			</div>
		</div>
  )
}

export default Movie;