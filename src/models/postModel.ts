import mongoose, { Schema, Document, Types } from "mongoose";

export interface IComment {
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
}

export interface IPost extends Document {
  _id: Types.ObjectId;
  title: string;
  content: string;
  author: Types.ObjectId;
  comments: IComment[];
}

const CommentSchema = new Schema<IComment>({
  content:{
    type: String,
    min:[5, "Comment is too short"]
  },
  author:{
    type: Schema.Types.ObjectId,
    required: [true, "user id it missing"]
  },
  createdAt:{
    type: Date,
    required: [true, "you mast enter time"]
  }
});

const PostSchema = new Schema<IPost>({
  title:{
    type: String,
  },
  content:{
    type: String,
    required:[true, "you most enter writre something"]
  },
  author:{
    type: Schema.Types.ObjectId,
    required: [true, "missing user id"]
  },
  comments:{
    type: [CommentSchema]
  }
})


export default mongoose.model<IPost>("Post", PostSchema);
