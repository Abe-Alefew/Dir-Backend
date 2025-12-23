import mongoose from "mongoose";

export const accountSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    provider: {
      type: String,
      required: true,
      default: "github",
    },

    providerAccountId: {
      type: String,
      required: true,
    },
    accessToken: { 
        type: String,  
    },
    // refreshToken: { 
    //     type: String,
    // }, no refresh token for github
    accessTokenExpiresAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate provider accounts
accountSchema.index(
  { provider: 1, providerAccountId: 1 },
  { unique: true }
);

const Account = mongoose.model("Account", accountSchema);
export default Account;
