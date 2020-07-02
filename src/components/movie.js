//jshint esversion:9
import React, { Component } from "react";

export default class Movie extends Component {
	state = {
		movie: null,
	};
	componentDidMount() {
		fetch(
			`https://api.themoviedb.org/3/movie/${this.props.match.params.movie_id}?api_key=b4f8ac6ee2c6df7cdf553494ebd88659&language=en-US`
		)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ movie: res });
			});
	}

	render() {
		if (this.state.movie) {
			return (
				<div className="movie-1">
					<h2>{this.state.id}</h2>
					<img
						src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}
						alt="movie img"
					/>
					<h4>{this.state.movie.title}</h4>
					<h5>Release Date: {this.state.movie.release_date}</h5>
					<h5>Rating: {this.state.movie.vote_average}</h5>
					<h5>Overview</h5>
					{this.state.movie.overview}
				</div>
			);
		} else {
			return (
				<div>
					<h3>loading</h3>
				</div>
			);
		}
	}
}
