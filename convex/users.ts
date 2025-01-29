import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const syncUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    image: v.optional(v.string()),
    role: v.optional(v.union(v.literal("interviewer"), v.literal("candidate"), v.literal("null"))),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (existingUser){

      // If the user exists, update their information, including the role if provided
      return await ctx.db.patch(existingUser._id, {
        name: args.name,
        email: args.email,
        image: args.image,
        role: args.role,
        clerkId: args.clerkId
      })

    } 

     // Ensure role is set, default to 'candidate' if not provided
     const role = args.role || "null";  // Default to 'null' if role is not provided

    return await ctx.db.insert("users", {
      ...args,
      role: role,
    });
  },
});

export const getUsers = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User is not authenticated");

    const users = await ctx.db.query("users").collect();

    return users;
  },
});

export const getUserByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    return user;
  },
});