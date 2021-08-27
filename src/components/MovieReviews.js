// Code MovieReviews Here
import React from "react";
// import Review from './Review'

const Review = (review) => {
    return (
        <div key={review.headline} className="review">
            <h1>{review.display_title}</h1>
            <h3>{review.headline}</h3>
            <a href={review.link.url}>Article Link</a>
            <blockquote>{review.summary_short}</blockquote>
        </div>
    )}   


const MovieReviews = ( props ) => (

        <div className="review-list">
            
            {props.reviews.map(Review)}            
            
            
            {/* {props.reviews.map((review) => {
                return (
                    <div key={review.headline}>
                        <h1>{review.display_title}</h1>
                        <h3>{review.headline}</h3>
                        <a href={review.link.url}>Article Link</a>
                    </div>
                )
            })} */}
        </div>

)

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews