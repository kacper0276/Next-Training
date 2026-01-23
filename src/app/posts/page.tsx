import { Post, Posts } from "@/types/post.type";
import styles from "./posts.module.scss";
import { commonMetadata } from "@/common/shared-metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Posts ${commonMetadata.title}`,
  description: `Posts ${commonMetadata.description}`,
};

export default async function PostsPage() {
  const response = await fetch("http://localhost:3004/posts");

  if (!response.ok) {
    throw new Error("problem with fetching posts");
  }

  const posts: Posts = await response.json();

  return (
    <div>
      Posts Page
      {posts.map((post: Post) => {
        return (
          <div className={styles.item} key={post.id}>
            {post.title}
          </div>
        );
      })}
    </div>
  );
}
