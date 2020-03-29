import { FETCH_POSTS, NEW_POST } from "./type";
import API from "../API";

export const fetchPosts = () => dispatch => {
	console.log("Fetch action Called");
	API.get("posts/").then(res => {
		const posts = res.data;
		console.log(posts);
		dispatch({
			type: FETCH_POSTS,
			payload: posts
		});
	});
};

export const createPost = postData => dispatch => {
	console.log("Post action called");
	API.post("posts/", { postData }).then(res => {
		const post = res.data.postData;
		console.log(post);
		dispatch({
			type: NEW_POST,
			payload: post
		});
	});
};
