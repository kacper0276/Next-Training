"use client";

import { Posts } from "@/types/post.type";
import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./lastNews.module.scss";
import { POSTS_TOTAL } from "@/common/config";

const POST_LIMIT: number = 3;

export const LastNews = () => {
  const [posts, setPosts] = useState<Posts | undefined>(undefined);
  const [page, setPage] = useState<number>(1);

  const fetchNews = useCallback(async () => {
    const resp = await axios.get<Posts>("http://localhost:3004/posts", {
      params: { _limit: POST_LIMIT, _page: page },
    });

    setPosts(resp.data);
  }, [page]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews, page]);

  const onNextNews = useCallback(() => {
    setPage((prevPage) => {
      if (prevPage + 1 < Math.ceil(POSTS_TOTAL / POST_LIMIT)) {
        return prevPage + 1;
      }

      return 1;
    });
  }, []);

  return (
    posts && (
      <div className={styles["last-news"]}>
        {posts.map((post) => (
          <div key={post.id} className={styles.item}>
            {post.title}{" "}
            <div className={styles["item-link"]}>
              <Link href={`/posts/${post.id}`}>Read more</Link>{" "}
            </div>{" "}
          </div>
        ))}
        <button onClick={onNextNews}>Next news</button>
      </div>
    )
  );
};
