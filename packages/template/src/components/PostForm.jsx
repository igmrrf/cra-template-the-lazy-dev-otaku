import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import { Button } from "react-bootstrap";

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 101,
			title: "",
			body: ""
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit(e) {
		e.preventDefault();
		const post = {
			id: this.state.id,
			title: this.state.title,
			body: this.state.body
		};

		//Call action
		this.props.createPost(post);
	}
	render() {
		const { title, body } = this.state;
		return (
			<div>
				<div
					className="text-info font-weight-bolder mt-5
				"
				>
					<h1>The Lazy Dev Otaku</h1>
				</div>
				<h3>Using JSON placeholder Fake API</h3>
				<h1>Add Posts</h1>

				<form onSubmit={this.onSubmit} method="posts">
					<div>
						<label>Title: </label>
						<br />
						<input
							name="title"
							type="text"
							value={title}
							onChange={this.onChange}
						/>
					</div>
					<br />
					<div>
						<label>Body: </label>
						<br />
						<textarea
							name="body"
							type="text"
							value={body}
							onChange={this.onChange}
						/>
					</div>
					<br />
					<Button variant="outline-dark" bg="info" type="submit">
						Submit
					</Button>
				</form>
			</div>
		);
	}
}
PostForm.prototypes = {
	createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
