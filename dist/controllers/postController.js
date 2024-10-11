"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = exports.updatePost = exports.getPost = exports.getPosts = exports.deletePost = exports.createPost = void 0;
const postService_1 = require("../services/postService");
// Create a new post
const createPost = async (req, res) => {
    try {
        const postFromDb = await (0, postService_1.createPostInDb)(req.body);
        res.status(201).json(postFromDb);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};
exports.createPost = createPost;
// Delete a post
const deletePost = async (req, res) => {
    try {
        const postDeleted = await (0, postService_1.deletePostById)(req.params.id);
        res.status(200).json(postDeleted);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};
exports.deletePost = deletePost;
// Get all posts
const getPosts = async (req, res) => {
    try {
        const AllPosts = await (0, postService_1.getAllPosts)(req.params.id);
        res.status(200).json(AllPosts);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};
exports.getPosts = getPosts;
// Get a single post by ID
const getPost = async (req, res) => {
    try {
        const AllPosts = await (0, postService_1.getAllPosts)(req.params.id);
        res.status(200).json(AllPosts);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};
exports.getPost = getPost;
// Update a post
const updatePost = async (req, res) => { };
exports.updatePost = updatePost;
// Add a comment to a post
const addComment = async (req, res, next) => { };
exports.addComment = addComment;
