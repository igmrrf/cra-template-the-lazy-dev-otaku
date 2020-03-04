import { FETCH_POSTS, NEW_POST } from "./type";
import API from "../API";

export const fetchPosts = () => dispatch => {
	console.log("Fetch action Called");
	API.get("posts/").then(res => {
		const posts = res.data;
		dispatch({
			type: FETCH_POSTS,
			payload: posts
		});
	});
};

export const createPost = postData => dispatch => {
	console.log("Post action called");
	API.post("", { postData }).then(res => {
		const post = res.data;
		dispatch({
			type: NEW_POST,
			payload: post
		});
	});
};
