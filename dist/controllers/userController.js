"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const createUser = async (req, res) => {
    try {
        const userFromDb = await (0, userService_1.entreUserIntoDb)(req.body);
        res.status(201).json(userFromDb);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};
exports.createUser = createUser;
const getUsers = async (req, res) => {
    try {
        const usersFromDb = await (0, userService_1.getAllUsers)();
        res.status(200).json(usersFromDb);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};
exports.getUsers = getUsers;
const getUser = async (req, res) => {
    try {
        const usersFromDb = await (0, userService_1.getUsersById)(req.params.username);
        res.status(200).json(usersFromDb);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};
exports.getUser = getUser;
// Optionally, add DELETE and EDIT functions
