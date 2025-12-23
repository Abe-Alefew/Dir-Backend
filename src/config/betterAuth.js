import mongoose from "mongoose";
import { betterAuth } from "better-auth";
import User from "../models/user.model.js";
import Session from "../models/session.model.js";
import Account from "../models/account.model.js";
import dotenv from "dotenv";

dotenv.config();

// Top-level await (Node 18+ with ESM)
await mongoose.connect(process.env.MONGO_URI);
console.log("Connected to MongoDB via Mongoose");

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  basePath: "/api/auth",
  database: {
    provider: "mongodb",
    collections: {
      user: User,
      session: Session,
      account: Account,
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
  emailAndPassword: {
    enabled: false,
  },
});
