import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";
import { entreUserIntoDb, getAllUsers, getUsersById } from "../services/userService";
import { log } from "console";

export const createUser = async (req: Request<any,any,IUser>, res: Response) => {
    try {
        const userFromDb = await entreUserIntoDb(req.body)
        res.status(201).json(userFromDb)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const usersFromDb:IUser[] = await getAllUsers()
        res.status(200).json(usersFromDb)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {        
        const usersFromDb:IUser = await getUsersById(req.params.username)
        res.status(200).json(usersFromDb)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
};

// Optionally, add DELETE and EDIT functions
