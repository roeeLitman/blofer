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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = exports.deletePostById = exports.createPostInDb = void 0;
const postModel_1 = __importDefault(require("../models/postModel"));
const createPostInDb = (postReq) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = new postModel_1.default();
        post.title = postReq.title;
        post.content = postReq.content;
        post.author = postReq.author;
        const postFromDb = yield post.save();
        return postFromDb;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.createPostInDb = createPostInDb;
const deletePostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletePost = yield postModel_1.default.findByIdAndDelete(id);
        if (!deletePost)
            throw new Error("not found user");
        return deletePost;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.deletePostById = deletePostById;
const getAllPosts = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield postModel_1.default.find();
        return posts;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.getAllPosts = getAllPosts;
