import React, { Component, useImperativeHandle } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: "",
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then((reviewsList) => this.setState({ reviews: reviewsList.results}))
    
    }

    handleOnChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    render() {
        return(
            <div className={"searchable-movie-reviews"}>
                <form onSubmit={this.handleSubmit}>
                    <label>Find Reviews </label>
                    <input
                        id="search"
                        type="text"
                        onChange={this.handleOnChange}

                    />
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        ) 

    }
    

}