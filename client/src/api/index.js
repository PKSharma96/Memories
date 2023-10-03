import axios from "axios";

// const url = "https://memories-full.herokuapp.com/posts";
const url = "https://memories-backend-eight.vercel.app/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
	axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
