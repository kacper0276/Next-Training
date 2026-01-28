import Link from "next/link";
import styles from "./pagination.module.scss";

type PaginationProps = {
  page: number;
  total: number;
  perPage: number;
};

export const Pagination = ({ page, total, perPage }: PaginationProps) => {
  const isNextPage = (page + 1) * perPage < total;

  return (
    <div className={styles.pagination}>
      {page > 1 && <Link href={`/posts?page=${page - 1}`}>Prev</Link>}
      <div>Page: {page}</div>
      {isNextPage && <Link href={`/posts?page=${page + 1}`}>Next</Link>}
    </div>
  );
};
