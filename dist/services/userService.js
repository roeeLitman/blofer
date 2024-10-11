"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersById = exports.getAllUsers = exports.entreUserIntoDb = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const entreUserIntoDb = async (userFromClient) => {
    try {
        const { username, email, profile, posts } = userFromClient;
        const newUser = new userModel_1.default();
        newUser.username = username;
        newUser.email = email;
        newUser.profile = profile;
        newUser.posts = posts;
        newUser.posts = [];
        const userFromDb = await newUser.save();
        console.log(userFromDb);
        return userFromDb;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.entreUserIntoDb = entreUserIntoDb;
const getAllUsers = async () => {
    try {
        const userFromDb = await userModel_1.default.find();
        console.log(userFromDb);
        return userFromDb;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getAllUsers = getAllUsers;
const getUsersById = async (id) => {
    try {
        const userFromDb = await userModel_1.default.findById(id);
        if (!userFromDb)
            throw new Error("not found usre");
        return userFromDb;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getUsersById = getUsersById;
