import { Post, Posts } from "@/types/post.type";
import styles from "./posts.module.scss";
import { commonMetadata } from "@/common/shared-metadata";
import { Metadata } from "next";
import { Pagination } from "@/common/components/Pagination/Pagination";
import { SearchParams } from "@/types/next.type";
import Link from "next/link";
import { fetchClient } from "@/common/clientApi/fetchClient";
import { POSTS_TOTAL } from "@/common/config";

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

  const queryParams = new URLSearchParams({
    _limit: `${POSTS_PER_PAGE}`,
    _page: `${page}`,
    _order: "desc",
    _sort: "id",
  });

  const posts: Posts = await fetchClient<Posts>(
    `http://localhost:3004/posts?${queryParams}`,
    { revalidate: 5 },
  );

  return (
    <div>
      <div className="headline">
        Posts Page
        <Link href="/posts/new">New POst</Link>
      </div>
      {posts.map((post: Post) => {
        return (
          <div className={styles.item} key={post.id}>
            #(${post.id}) {post.title}
            <br />
            <Link href={`/posts/${post.id}`}>Read more</Link>
          </div>
        );
      })}
      <Pagination page={page} total={POSTS_TOTAL} perPage={POSTS_PER_PAGE} />
    </div>
  );
}
