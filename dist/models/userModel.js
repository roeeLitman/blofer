"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const validator_1 = require("validator");
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        min: [4, "name is shorts"],
        unique: true,
        required: [true, "you most giv name"],
    },
    email: {
        type: String,
        validate: [validator_1.isEmail, "email is not  valid"],
        required: [true, "you most giv em"],
    },
    profile: {
        type: {
            bio: {
                type: String,
            },
            socialLinks: {
                type: [String]
            },
        },
    },
    posts: {
        type: [mongoose_1.Schema.Types.ObjectId],
    },
});
exports.default = mongoose_1.default.model("User", UserSchema);
