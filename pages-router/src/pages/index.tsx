import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      Home Page
      <Link href="/contact">Go to Contact</Link>
      <Link href="/contact/about-us">Go to About Us</Link>
      <Link href="/posts">Go to Posts</Link>
    </div>
  );
};

export default HomePage;
