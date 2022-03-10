import axios from "axios";
import FormCard from '../../components/FormCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import './style.css'



function Movie() {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState({title: " ", actors: [], reviews: []})
  const [registerCard, setRegisterCard] = useState(0)

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
						  	<img src={movieDetails.poster_image_url}/>
						</div>
					</div>
	        	</div>
	        	<div className="col-md-6">
	        		<div className="product-dtl">
        				<div className="product-info">
		        			<div className="product-name">Variable Product</div>
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
		        			<div className="product-price-discount"><span>$39.00</span><span className="line-through">$29.00</span></div>
		        		</div>
	        			<p>{movieDetails.description}</p>
	        			<div className="product-count">
	        				<label>Quantity</label>
	        				<form action="#" className="display-flex">
							    <div className="qtyminus">-</div>
							    <input type="text" name="quantity" value="1" className="qty"/>
							    <div className="qtyplus">+</div>
							</form>
							<a href="#" className="round-black-btn">Add to Cart</a>
	        			</div>
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
                {movieDetails.actors.map(actor => (<li className="mb-20">{actor.name}</li>))}
              </ul>				  		
				  	</div>
            <div className={"tab-pane fade " + ((registerCard === 1) ? "show active" : "")} id="review" role="tabpanel" aria-labelledby="review-tab">
				  		<div className="review-heading">REVIEWS</div>

              <hr/>  		
              { (movieDetails.reviews.length === 0) ? (<p className="mb-20">There are no reviews yet.</p>) : (
                <ul>
                    {movieDetails.reviews.map(review => (<li className="mb-20">{review.content}</li>))}
                </ul> )
              }
              <hr/>
				  		<form className="review-form">
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
				        			<div className="form-group">
					        			<input type="text" name="" className="form-control" placeholder="Email Id*" />
					        		</div>
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