import { Request, Response, NextFunction } from "express";
import PostModel, { IPost } from "../models/postModel";
import User from "../models/userModel";
import postModel from "../models/postModel";
import userModel from "../models/userModel";

export const createPostInDb = async (postReq:IPost):Promise<IPost> => {
    try {  
        const { author:idUser } = postReq

        const post = new postModel()
        post.title = postReq.title
        post.content = postReq.content
        post.author = postReq.author
        
        const userUpdate = await userModel.findByIdAndUpdate( idUser , {$push:{posts:post.id}})
        if(!userUpdate) throw new Error("not can to update user");
        
        const newPOst = await post.save()
        
        return newPOst
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

