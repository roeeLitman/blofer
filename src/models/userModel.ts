import mongoose, { Schema, Document, Types } from "mongoose";
import validator, {isEmail} from "validator";

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
  username:{
    type: String,
    min: [4, "name is shorts"],
    unique: true,
    required:[true, "you most giv name"]
  },
  email: {
    type: String,
    validate: [isEmail, "email is not  valid"],
    required:[true, "you most giv em"]
  },
  profile:{
    bio:{
      
    }
  }
});

export default mongoose.model<IUser>("User", UserSchema);
