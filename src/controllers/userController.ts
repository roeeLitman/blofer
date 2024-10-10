import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";
import { entreUserIntoDb } from "../services/userService";

export const createUser = async (req: Request<any,any,IUser>, res: Response) => {
    try {
        const userFromDb = entreUserIntoDb(req.body)
        res.status(201).json(userFromDb)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
};

export const getUsers = async (req: Request, res: Response) => {};

export const getUser = async (req: Request, res: Response) => {};

// Optionally, add DELETE and EDIT functions
