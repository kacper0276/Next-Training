"use server";

import {
  fetchClient,
  generatePostTag,
  updateClient,
} from "@/common/clientApi/fetchClient";
import { Post } from "@/types/post.type";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const Validation = z.object({
  title: z.string().min(3),
  body: z.string().min(3),
  tags: z.string(),
});

export const likePost = async (postId: number) => {
  const post = await fetchClient<Post>(`http://localhost:3004/posts/${postId}`);
  await updateClient("PATCH", `http://localhost:3004/posts/${postId}`, {
    reactions: post.reactions + 1,
  });
  revalidateTag(generatePostTag(postId));
  // revalidatePath(generatePostTag(postId)) - Tak samo jak tag (warto użyć gdy mamy wiele danych do odświeżenia)
};

export const savePost = async (formData: FormData) => {
  const data: { [key: string]: unknown } = {};
  for (const pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }

  const parseResult = Validation.safeParse(data);

  if (!parseResult.success) {
    return;
  }

  data.tags = data.tags ? (data.tags as string).split(",") : {};
  data.reactions = 0;

  await updateClient("POST", "http://localhost:3004/posts", data);
  revalidatePath("/posts");
  redirect("/posts");
};
