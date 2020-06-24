import React, { Component } from "react";

export default class NewTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formValues: "",
		};
		this.handleChange = (e) => {
			let todo = e.target.value;
			this.setState({ formValues: todo });
		};
		this.handleSubmit = (e) => {
			e.preventDefault();
			this.props.addTodo(this.state.formValues);
		};
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form">
				<input type="text" onChange={this.handleChange} />
				<button type="submit">submit</button>
			</form>
		);
	}
}
