import { Request, Response, NextFunction } from "express";
import PostModel, { IPost } from "../models/postModel";
import User from "../models/userModel";
import postModel from "../models/postModel";

export const createPostInDb = async (postReq:IPost):Promise<IPost> => {
    try {  
        const post = new postModel()
        post.title = postReq.title
        post.content = postReq.content
        post.author = postReq.author

        const postFromDb = await post.save()
        return postFromDb
    } catch (err) {
        console.log(err);
        throw err
    }
}

