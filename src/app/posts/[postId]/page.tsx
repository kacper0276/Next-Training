import { Post } from "@/types/post.type";
import { NextPage } from "next";
import styles from "./post.module.scss";
import { fetchClient, generatePostTag } from "@/common/clientApi/fetchClient";
import { LikePost } from "../LikePost";

type PostPageProps = {
  params: {
    postId: string;
  };
};

const fetchPost = async (postId: number): Promise<Post> => {
  return await fetchClient<Post>(`http://localhost:3004/posts/${postId}`, {
    tags: [generatePostTag(postId)],
  });
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

      <div className={styles.likes}>Likes: {post.reactions}</div>

      <LikePost postId={post.id} />
    </div>
  );
};

export default PostPage;
