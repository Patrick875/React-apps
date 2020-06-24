//jshint esversion:9
import React from "react";

export default function Progress({ progress, getCompleted }) {
	//let { progress, getCompleted } = this.props;
	function handleClick(e) {
		console.log("here");

		return getCompleted(e.target.innerText);
	}
	const progr = progress.map((el) => (
		<p key={el.id} onClick={handleClick} className="element1">
			{el}
		</p>
	));
	return (
		<div style={{ backgroundColor: "whitesmoke" }}>
			<h2>Progress</h2>
			{progr}
		</div>
	);
}
