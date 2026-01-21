import { Metadata } from "next";
import { commonMetadata } from "@/common/shared-metadata";

export const metadata: Metadata = {
  title: `Tytuł ${commonMetadata.title}`,
  description: "OPIS",
};

export default function MainPage() {
  return (
    <div>
      <h1>Main page</h1>
    </div>
  );
}
