//jshint esversion:9

import React, { useState } from "react";
const weatherApi = {
	key: "4019c466c667c526dfafaf60dd8bd87e",
	base: "https://api.openweathermap.org/data/2.5/",
};
// const placeApi = {
// 	key: "AIzaSyBj7_QAkzeOl8s0qY1qQLeqKpPrYhc3A5s",
// 	base:
// 		"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY",
// };
export default function App() {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});
	const search = (e) => {
		if (e.key === "Enter") {
			fetch(
				`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`
			)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result);
					setQuery("");
					console.log(result);
				});
		}
	};
	// const image = async () => {
	// 	await fetch();
	// };
	const dateBuilder = (d) => {
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();
		return `${day} ${date} ${month} ${year}`;
	};
	return (
		<div
			className={
				typeof weather.main != "undefined"
					? weather.main.temp > 16
						? "app warm"
						: "app"
					: "app"
			}>
			<main>
				<div className="search-box">
					<input
						type="text"
						className="search-bar"
						placeholder="search..."
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						onKeyPress={search}
					/>
				</div>
				{typeof weather.main != "undefined" ? (
					<div>
						<div className="location-box">
							<div className="location">
								{weather.name}, {weather.sys.country}
							</div>
							<div className="date">{dateBuilder(new Date())}</div>
						</div>
						<div className="weather-box">
							<div className="temp">{Math.round(weather.main.temp)}°c</div>
							<div className="weather">{weather.weather[0].main}</div>
						</div>
					</div>
				) : (
					""
				)}
			</main>
		</div>
	);
}
