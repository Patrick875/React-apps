//jshint esversion:9
import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar">
			<ul className="nav-list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<NavLink to="/search">Search</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
