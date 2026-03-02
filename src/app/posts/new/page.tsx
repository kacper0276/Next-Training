import { NextPage } from "next";
import { FormPost } from "./Form";
import { SearchParams } from "@/types/next.type";
import { fetchClient } from "@/common/clientApi/fetchClient";
import { Post } from "@/types/post.type";

export const metadata = {
  title: "SavePost",
};

const SavePostPage: NextPage<SearchParams> = async ({ searchParams }) => {
  let post: Post | undefined;

  if (searchParams?.id) {
    post = await fetchClient<Post>(
      `http://localhost:3004/posts/${searchParams.id}`,
    );
  }
  return (
    <div>
      <h1>Save post</h1>
      <FormPost post={post} />
    </div>
  );
};

export default SavePostPage;
