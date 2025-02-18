import { Menu } from "@/common/components/Menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tytuł",
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
