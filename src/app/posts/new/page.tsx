import { NextPage } from "next";
import { FormPost } from "./Form";

export const metadata = {
  title: "SavePost",
};

const SavePostPage: NextPage = async () => {
  return (
    <div>
      <h1>Save post</h1>
      <FormPost />
    </div>
  );
};

export default SavePostPage;
