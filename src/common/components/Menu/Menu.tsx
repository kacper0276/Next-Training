import Link from "next/link";
import styles from "./menu.module.scss";

export function Menu() {
  return (
    <ul className={styles.menu}>
      <li className={styles["menu-item"]}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles["menu-item"]}>
        <Link href="/contact">Contact</Link>
      </li>
      <li className={styles["menu-item"]}>
        <Link href="/contact/team">Team</Link>
      </li>
      <li className={styles["menu-item"]}>
        <Link href="/contact/about-us">About Us</Link>
      </li>
      <li className={styles["menu-item"]}>
        <Link href="/posts">Posts</Link>
      </li>
    </ul>
  );
}
