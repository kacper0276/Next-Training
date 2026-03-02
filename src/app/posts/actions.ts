"use server";

import {
  fetchClient,
  generatePostTag,
  updateClient,
} from "@/common/clientApi/fetchClient";
import { FormState, Post } from "@/types/post.type";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const Validation = z.object({
  title: z.string().min(3),
  body: z.string().min(3),
  tags: z.string(),
});

export type PostData = z.infer<typeof Validation>;

export const likePost = async (postId: number) => {
  const post = await fetchClient<Post>(`http://localhost:3004/posts/${postId}`);
  await updateClient("PATCH", `http://localhost:3004/posts/${postId}`, {
    reactions: post.reactions + 1,
  });
  revalidateTag(generatePostTag(postId));
  // revalidatePath(generatePostTag(postId)) - Tak samo jak tag (warto użyć gdy mamy wiele danych do odświeżenia)
};

export const savePost = async (state: FormState, formData: FormData) => {
  const data: { [key: string]: unknown } = {};
  for (const pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }

  const parseResult = Validation.safeParse(data);

  if (!parseResult.success) {
    const newState: FormState = {
      errors: parseResult.error.flatten().fieldErrors,
    };
    return newState;
  }

  const id = Number(formData.get("id"));

  const dataToSend = {
    ...parseResult.data,
    tags: parseResult.data.tags
      ? (parseResult.data.tags as string).split(",")
      : [],
    reactions: id ? undefined : 0,
  };

  await updateClient(
    id ? "PATCH" : "POST",
    `http://localhost:3004/posts${id ? `/${id}` : ""}`,
    dataToSend,
  );
  revalidatePath("/posts");

  if (id) {
    revalidateTag(generatePostTag(id));
  }

  redirect("/posts");
};
