import React from 'react';

const Review = (review) => {
    return (
        <div>
            <h1>{review.display_title}</h1>
            <h3>{review.headline}</h3>
            <a href={review.link.url}>Article Link</a>
        </div>
    )}    
    

export default Review