import { Request, Response, NextFunction } from "express";
import postModel, { IPost } from "../models/postModel";
import User from "../models/userModel";
import { createPostInDb } from "../services/postService";

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
  next: NextFunction
): Promise<void> => {};

// Get all posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

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
