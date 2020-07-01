//jshint esversion:9

import React, { useState } from "react";

function Search() {
	const [movies, setMovies] = useState("");
	const [query, setQuery] = useState("");
	const api = {
		url: "https://api.themoviedb.org/3/search/movie/?",
		key: "b4f8ac6ee2c6df7cdf553494ebd88659",
		url1: "https://api.themoviedb.org/3/trending/all/day?api_key=",
	};
	const search = (e) => {
		if (e.key === "Enter") {
			fetch(`${api.url}api_key=${api.key}&query=${query}`)
				.then((res) => res.json())
				.then((results) => {
					console.log(results);
					setMovies(results.results);
					setQuery("");
				});
		} else {
			console.log("data loading....");
		}
	};
	const okay = movies
		? movies.map((el) => {
				return (
					<div key={el.id} className="movie">
						<img
							src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
							alt="movie img"
						/>
						<h4>{el.title}</h4>
						<h5>Release Date: {el.release_date}</h5>
						<h5>Rating: {el.vote_average}</h5>
					</div>
				);
		  })
		: "";
	return (
		<div className="container">
			<div className="input-form">
				<input
					type="text"
					placeholder="search movie ...."
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					onKeyPress={search}
				/>
				<div className="movies">{okay}</div>
			</div>
		</div>
	);
}

export default Search;
