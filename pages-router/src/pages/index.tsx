import MainLayout from "@/common/components/layouts/MainLayout";
import Link from "next/link";

const HomePage = () => {
  return (
    <MainLayout>
      Home Page
      <Link href="/contact">Go to Contact</Link>
      <Link href="/contact/about-us">Go to About Us</Link>
      <Link href="/posts">Go to Posts</Link>
    </MainLayout>
  );
};

export default HomePage;
