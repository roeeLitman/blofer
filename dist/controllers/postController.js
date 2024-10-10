"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = exports.updatePost = exports.getPost = exports.getPosts = exports.deletePost = exports.createPost = void 0;
const postService_1 = require("../services/postService");
// Create a new post
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postFromDb = yield (0, postService_1.createPostInDb)(req.body);
        res.status(201).json(postFromDb);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
exports.createPost = createPost;
// Delete a post
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postDeleted = yield (0, postService_1.deletePostById)(req.params.id);
        res.status(200).json(postDeleted);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
exports.deletePost = deletePost;
// Get all posts
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AllPosts = yield (0, postService_1.getAllPosts)(req.params.id);
        res.status(204).json(AllPosts);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
});
exports.getPosts = getPosts;
// Get a single post by ID
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getPost = getPost;
// Update a post
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updatePost = updatePost;
// Add a comment to a post
const addComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.addComment = addComment;
