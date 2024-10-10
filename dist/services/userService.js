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
exports.getAllUsers = exports.entreUserIntoDb = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const userModel_2 = __importDefault(require("../models/userModel"));
const entreUserIntoDb = (userFromClient) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, profile, posts } = userFromClient;
        const newUser = new userModel_1.default();
        newUser.username = username;
        newUser.email = email;
        newUser.profile = profile;
        newUser.posts = posts;
        const userFromDb = yield newUser.save();
        console.log(userFromDb);
        return userFromDb;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.entreUserIntoDb = entreUserIntoDb;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFromDb = yield userModel_2.default.find();
        console.log(userFromDb);
        return userFromDb;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.getAllUsers = getAllUsers;
