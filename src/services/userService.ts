import { promises } from "dns";
import UserModel, { IUser } from "../models/userModel";
import { log } from "console";

export const entreUserIntoDb = async (
  userFromClient: IUser
): Promise<IUser> => {
  try {
    const { username, email, profile, posts } = userFromClient;
    const newUser: IUser = new UserModel();
    newUser.username = username;
    newUser.email = email;
    newUser.profile = profile;
    newUser.posts = posts;

    const userFromDb = await newUser.save();
    console.log(userFromDb);
    return userFromDb;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const userFromDb = await UserModel.find();
    console.log(userFromDb);
    return userFromDb;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUsersById = async (id: string): Promise<IUser> => {
  try {
    const userFromDb:IUser | null = await UserModel.findById(id);
    if(!userFromDb) throw new Error("not found usre");
    return userFromDb;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
