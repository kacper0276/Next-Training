import { fetchClient } from "@/common/clientApi/fetchClient";
import MainLayout from "@/common/components/layouts/MainLayout";
import { Post } from "@/types/post.type";
import { InferGetServerSidePropsType } from "next";

type ServerSideProps = {
  params: {
    postId: string;
  };
};

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  const post = await fetchClient<Post>(
    `http://localhost:3004/posts/${params.postId}`,
  );

  return {
    props: {
      post,
    },
  };
};

const PostPage = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </MainLayout>
  );
};

export default PostPage;
