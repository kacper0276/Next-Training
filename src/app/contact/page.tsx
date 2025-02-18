import { Menu } from "@/common/components/Menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "OPIS Contact",
};

export default function ContactPage() {
  return (
    <div>
      <Menu />
      <h1>Contact</h1>
    </div>
  );
}
