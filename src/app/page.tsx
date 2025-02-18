import { Menu } from "@/common/components/Menu";
import { Metadata } from "next";
import { commonMetadata } from "@/common/shared-metadata";

export const metadata: Metadata = {
  title: `Tytuł ${commonMetadata}`,
  description: "OPIS",
};

export default function MainPage() {
  return (
    <div>
      <Menu />
      <h1>Main page</h1>
    </div>
  );
}
