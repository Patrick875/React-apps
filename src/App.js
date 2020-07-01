//jshint esversion:9
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Home from "./components/home";

function App() {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<Switch>
					<main>
						<h1>Welcome to the home of movies</h1>
						<Route exact path="/" component={Home} />
						<Route path="/search" component={Search} />
					</main>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
