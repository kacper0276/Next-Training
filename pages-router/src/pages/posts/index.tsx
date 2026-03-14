import { fetchClient } from "@/common/clientApi/fetchClient";
import MainLayout from "@/common/components/layouts/MainLayout";
import { Posts } from "@/types/post.type";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

// Wykonuje się tylko po stronie serwera
export const getServerSideProps = async () => {
  const posts = await fetchClient<Posts>("http://localhost:3004/posts");

  return {
    props: {
      posts,
    },
  };
};

const PostsPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout>
      <Head>
        <title>Post page</title>
      </Head>
      <div>Posts Page</div>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <Link href={`/posts/${post.id}`}>Go to post</Link>
        </div>
      ))}
    </MainLayout>
  );
};

export default PostsPage;
