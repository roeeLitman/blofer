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
export const deletePostById = async (id:string):Promise<IPost> => {
    try {  

        const deletePost: IPost | null = await postModel.findByIdAndDelete(id)
        if(!deletePost) throw new Error("not found user");        
        return deletePost

    } catch (err) {
        console.log(err);
        throw err
    }
}

export const getAllPosts = async (id:string):Promise<IPost[]> => {
    try {  

        const posts = await postModel.find()  
        return posts

    } catch (err) {
        console.log(err);
        throw err
    }
}

