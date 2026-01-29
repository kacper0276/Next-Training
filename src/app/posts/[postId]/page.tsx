import { Post } from "@/types/post.type";
import { NextPage } from "next";
import styles from "./post.module.scss";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: {
    postId: string;
  };
};

const fetchPost = async (postId: number): Promise<Post> => {
  const response = await fetch(`http://localhost:3004/posts/${postId}`);

  if (!response.ok && response.status === 404) {
    throw notFound();
  }

  if (!response.ok) {
    throw new Error("problem with fetching post");
  }

  const post: Post = await response.json();

  return post;
};

export const generateMetadata = async ({ params }: PostPageProps) => {
  const post = await fetchPost(Number(params.postId));

  return {
    title: post.title,
    description: `read about ${post.title} post`,
  };
};

const PostPage: NextPage<PostPageProps> = async ({ params }) => {
  const post = await fetchPost(Number(params.postId));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {post.tags && post.tags.length > 0 && (
        <div className={styles.tags}>
          Tags:
          {post.tags.map((tag) => (
            <em key={tag}>{tag} </em>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostPage;
