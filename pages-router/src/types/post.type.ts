export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

export type Posts = Post[];

export type FormState = { errors: { [key: string]: string[] } };
