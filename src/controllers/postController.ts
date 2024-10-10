import { Request, Response, NextFunction } from "express";
import postModel, { IPost } from "../models/postModel";
import User from "../models/userModel";
import { createPostInDb, deletePostById, getAllPosts } from "../services/postService";

// Create a new post
export const createPost = async (
  req: Request<any, any, IPost>,
  res: Response
): Promise<void> => {
  try {
    const postFromDb: IPost = await createPostInDb(req.body);
    res.status(201).json(postFromDb);
  } catch (err) {
    res.status(400).json((err as Error).message);
  }
};

// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const postDeleted:IPost = await deletePostById(req.params.id);
    res.status(200).json(postDeleted);
  } catch (err) {
    res.status(400).json((err as Error).message);
  }
};

// Get all posts
export const getPosts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const AllPosts:IPost[] = await getAllPosts(req.params.id);
    res.status(204).json(AllPosts);
  } catch (err) {
    res.status(400).json((err as Error).message);
  }
};

// Get a single post by ID
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

// Update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

// Add a comment to a post
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};
