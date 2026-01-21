import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Team",
    description: "OPIS Team",
  };
}

export default function TeamPage() {
  return (
    <div>
      <h1>Team</h1>
    </div>
  );
}
