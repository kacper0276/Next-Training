import { notFound } from "next/navigation";

type FetchClientOptions = {
  revalidate: number;
};

export async function fetchClient<T = unknown>(
  url: string,
  options: FetchClientOptions = { revalidate: 10 },
): Promise<T> {
  const { revalidate } = options;

  const response = await fetch(url, { next: { revalidate } });

  if (!response.ok && response.status === 404) {
    throw notFound();
  }

  if (!response.ok) {
    throw new Error("problem with fetching post");
  }

  const data: T = await response.json();

  return data;
}
