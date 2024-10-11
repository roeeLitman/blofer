"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = exports.deletePostById = exports.createPostInDb = void 0;
const postModel_1 = __importDefault(require("../models/postModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const createPostInDb = async (postReq) => {
    try {
        const { author: idUser } = postReq;
        const post = new postModel_1.default();
        post.title = postReq.title;
        post.content = postReq.content;
        post.author = postReq.author;
        const userUpdate = await userModel_1.default.findByIdAndUpdate(idUser, { $push: { posts: post.id } });
        if (!userUpdate)
            throw new Error("not can to update user");
        const newPOst = await post.save();
        return newPOst;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.createPostInDb = createPostInDb;
const deletePostById = async (id) => {
    try {
        const deletePost = await postModel_1.default.findByIdAndDelete(id);
        if (!deletePost)
            throw new Error("not found user");
        return deletePost;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.deletePostById = deletePostById;
const getAllPosts = async (id) => {
    try {
        const posts = await postModel_1.default.find();
        return posts;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getAllPosts = getAllPosts;
