//jshint esversion:9
import React from "react";

export default function Todo({ getProgress, todos }) {
	//const { todos, getProgress } = this.props;
	function handleClick(e) {
		console.log(e.target.innerText);
		return getProgress(e.target.innerText);
	}
	const todo = todos.map((el) => (
		<p key={el.id} onClick={handleClick} className="element">
			{el.todo}
		</p>
	));
	return (
		<div className="todo">
			<h2>Todo</h2>
			{todo}
		</div>
	);
}
