//jshint esversion:9

import React, { Component } from "react";
import Todo from "./components/todo";
import Progress from "./components/progress";
import Completed from "./components/completed";
import NewTodo from "./components/newTodo";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: [
				{
					id: 1,
					todo: "Learn Nodejs,Mongodb and Express",
				},
				{
					id: 2,
					todo: "learn at least one new CSS trick",
				},
				{
					id: 3,
					todo: "Build a simple React Project",
				},
			],
			progress: [],
			completed: [],
		};
		this.getProgress = (progress) => {
			let newTodos = [...this.state.progress, progress];
			this.setState({ progress: newTodos });
			console.log(newTodos);

			//return progress;
		};
		this.getCompleted = (completed) => {
			let newTodos = [...this.state.completed, completed];
			this.setState({ completed: newTodos });
			//return completed;
		};
		this.addTodo = (todo) => {
			let id = this.state.todo[this.state.todo.length - 1].id + 1;
			let newTodo = { id: id, todo: todo };
			const newTodos = [newTodo, ...this.state.todo];
			console.log(newTodos);

			this.setState({ todo: newTodos });
		};
	}

	render() {
		return (
			<div>
				<div className="app">
					<Todo todos={this.state.todo} getProgress={this.getProgress} />
					<Progress
						progress={this.state.progress}
						getCompleted={this.getCompleted}
					/>
					<Completed completed={this.state.completed} />
				</div>
				<NewTodo addTodo={this.addTodo} />
			</div>
		);
	}
}
