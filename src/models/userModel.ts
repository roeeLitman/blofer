import mongoose, { Schema, Document, Types } from "mongoose";
import validator, { isEmail } from "validator";

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  profile: {
    bio?: string;
    socialLinks?: string[];
  };
  posts: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    min: [4, "name is shorts"],
    unique: true,
    required: [true, "you most giv name"],
  },
  email: {
    type: String,
    validate: [isEmail, "email is not  valid"],
    required: [true, "you most giv em"],
  },
  profile: {
    type: {
      bio: String,
      socialLinks: [String],
    },
  },
  posts: {
    type: [Schema.Types.ObjectId],
    ref: "Post",
    required: [true, "you need add Array"]
  },
});

export default mongoose.model<IUser>("User", UserSchema);
