import { Post, Posts } from "@/types/post.type";
import styles from "./posts.module.scss";
import { commonMetadata } from "@/common/shared-metadata";
import { Metadata } from "next";
import { Pagination } from "@/common/components/Pagination/Pagination";
import { SearchParams } from "@/types/next.type";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Posts ${commonMetadata.title}`,
  description: `Posts ${commonMetadata.description}`,
};

type PostsPageProps = {} & SearchParams;

const POSTS_PER_PAGE = 10;

export default async function PostsPage({ searchParams }: PostsPageProps) {
  let page: number = 1;

  if (searchParams?.page) {
    page = Number(searchParams.page) || 1;
  }

  const response = await fetch(
    `http://localhost:3004/posts?_limit=${POSTS_PER_PAGE}&_page=${page}`,
    { next: { revalidate: 10 } },
  );

  if (!response.ok) {
    throw new Error("problem with fetching posts");
  }

  const posts: Posts = await response.json();

  const POSTS_TOTAL = posts.length;

  return (
    <div>
      Posts Page
      {posts.map((post: Post) => {
        return (
          <div className={styles.item} key={post.id}>
            {post.title}
            <br />
            <Link href={`/posts/${post.id}`}>Read more</Link>
          </div>
        );
      })}
      <Pagination page={page} total={POSTS_TOTAL} perPage={POSTS_PER_PAGE} />
    </div>
  );
}
