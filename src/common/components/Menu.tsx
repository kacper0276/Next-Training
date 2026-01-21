import Link from "next/link";

export function Menu() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/contact/team">Team</Link>
      </li>
      <li>
        <Link href="/contact/about-us">About Us</Link>
      </li>
    </ul>
  );
}
