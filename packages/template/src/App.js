import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					<PostForm />
				</div>
				<hr />
				<div>
					<Posts />
				</div>
			</div>
		);
	}
}

export default App;
