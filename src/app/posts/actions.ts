"use server";

import { fetchClient, updateClient } from "@/common/clientApi/fetchClient";
import { Post } from "@/types/post.type";

export const likePost = async (postId: number) => {
  const post = await fetchClient<Post>(`http://localhost:3004/posts/${postId}`);
  await updateClient("PATCH", `http://localhost:3004/posts/${postId}`, {
    reactions: post.reactions + 1,
  });
};
