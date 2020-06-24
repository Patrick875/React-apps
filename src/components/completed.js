//jshint esversion:9
import React from "react";

export default function Completed({ completed }) {
	const finished = completed.map((el) => (
		<p className="element2" key={el.id}>
			{el}
		</p>
	));
	return (
		<div className="completed">
			<h2>Completed</h2>
			{finished}
		</div>
	);
}
