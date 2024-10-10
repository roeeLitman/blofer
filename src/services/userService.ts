import { promises } from "dns";
import UserMode,{ IUser,} from "../models/userModel";
import { log } from "console";

export const entreUserIntoDb = async (userFromClient:IUser): Promise<IUser> => {
    try {
        
        const {username, email, profile, posts} = userFromClient
        const newUser:IUser = new UserMode()
        newUser.username = username
        newUser.email = email
        newUser.profile = profile
        newUser.posts = posts
        
        const userFromDb = await newUser.save()
        console.log(userFromDb);
        return userFromDb
    } catch (err) {
        console.log(err);
        throw err   
    }
    }
