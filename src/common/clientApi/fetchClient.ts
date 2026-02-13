import { notFound } from "next/navigation";

type FetchClientOptions = {
  revalidate?: number;
  tags?: string[];
};

export async function fetchClient<T = unknown>(
  url: string,
  options: FetchClientOptions = { revalidate: 10 },
): Promise<T> {
  const { revalidate, tags } = options;

  const response = await fetch(url, { next: { revalidate, tags } });

  if (!response.ok && response.status === 404) {
    throw notFound();
  }

  if (!response.ok) {
    throw new Error("problem with fetching post");
  }

  const data: T = await response.json();

  return data;
}

export async function updateClient(
  method: "POST" | "PATCH",
  url: string,
  data: unknown,
) {
  const resp = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });

  if (!resp.ok) {
    console.log(resp);
    throw new Error("Problem with update data");
  }
}

export function generatePostTag(postId: number): string {
  return `post${postId}`;
}
