import { Menu } from "@/common/components/Menu";
import { Metadata } from "next";
import { commonMetadata } from "@/common/shared-metadata";

export const metadata: Metadata = {
  title: `Contact ${commonMetadata.title}`,
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
