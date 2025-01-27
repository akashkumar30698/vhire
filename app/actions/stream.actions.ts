"use server";

import { auth } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

export const streamTokenProvider = async () => {
 // const user = await currentUser();
  const { userId } = await auth()

  if(!process.env.STREAM_SECRET_KEY || ! process.env.NEXT_PUBLIC_STREAM_API_KEY){
    throw new Error("No Stream API key or secret found")
  }

  if (!userId) throw new Error("User not authenticated");

  const streamClient = new StreamClient(
    process.env.NEXT_PUBLIC_STREAM_API_KEY,
    process.env.STREAM_SECRET_KEY
  );

  const token = streamClient.generateUserToken({ user_id: userId });

  return token;
};