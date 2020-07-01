//jshint esversion:9
import React, { useState, useEffect } from "react";

function Home() {
	const [popular, setPopular] = useState(null);
	const [trending, setTrending] = useState(null);
	const api = {
		key: "b4f8ac6ee2c6df7cdf553494ebd88659",
		url: "https://api.themoviedb.org/3/trending/all/day?api_key=",
		url1: "https://api.themoviedb.org/3/movie/latest?api_key=",
	};
	useEffect(() => {
		const abortController = new AbortController();
		const getTrending = async () => {
			await fetch(`${api.url}${api.key}`, { signal: abortController.signal })
				.then((res) => res.json())
				.then((res) => {
					setTrending(res.results.slice(0, 10));
				});
		};
		getTrending();
		return () => {
			abortController.abort();
		};
	}, [trending]);
	useEffect(() => {
		const abortController = new AbortController();
		const getPopular = async () => {
			await fetch(
				`https://api.themoviedb.org/3/movie/popular?api_key=b4f8ac6ee2c6df7cdf553494ebd88659&language=en-US&page=1`,
				{
					signal: abortController.signal,
				}
			)
				.then((res) => res.json())
				.then((res) => {
					setPopular(res.results.slice(0, 10));
				});
		};
		getPopular();
		return () => {
			abortController.abort();
		};
	}, [popular]);
	const trendMovies = trending
		? trending.map((el) => {
				return (
					<div key={el.id} className="movie">
						<img
							src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
							alt="movie img"
						/>
						<h4>{el.original_name || el.original_title}</h4>
						<h5>Release Date: {el.release_date}</h5>
						<h5>Rating: {el.vote_average}</h5>
					</div>
				);
		  })
		: "";
	const pplMovies = popular
		? popular.map((el) => {
				return (
					<div key={el.key} className="movie">
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
		<div>
			<h3>Trending</h3>
			<section className="trending">{trendMovies}</section>
			<h3>Popular</h3>
			<section className="popular">{pplMovies}</section>
		</div>
	);
}

export default Home;
