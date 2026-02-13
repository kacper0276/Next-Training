"use server";

import {
  fetchClient,
  generatePostTag,
  updateClient,
} from "@/common/clientApi/fetchClient";
import { Post } from "@/types/post.type";
import { revalidateTag } from "next/cache";

export const likePost = async (postId: number) => {
  const post = await fetchClient<Post>(`http://localhost:3004/posts/${postId}`);
  await updateClient("PATCH", `http://localhost:3004/posts/${postId}`, {
    reactions: post.reactions + 1,
  });
  revalidateTag(generatePostTag(postId));
  // revalidatePath(generatePostTag(postId)) - Tak samo jak tag (warto użyć gdy mamy wiele danych do odświeżenia)
};
