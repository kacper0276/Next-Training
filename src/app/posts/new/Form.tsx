"use client";

import { FC, useState } from "react";
import { PostData, savePost } from "../actions";
import { useFormState, useFormStatus } from "react-dom";
import { FormState, Post } from "@/types/post.type";
import { ErrorForm } from "@/common/components/ErrorForm/ErrorForm";

export const FormPost: FC<{ post?: Post }> = ({ post }) => {
  const [state, formAction] = useFormState<FormState, FormData>(savePost, {
    errors: {},
  });

  return (
    <form action={formAction}>
      <FormContent post={post} state={state} />
    </form>
  );
};

const FormContent: FC<{ post?: Post; state: FormState }> = ({
  post,
  state,
}) => {
  const { pending } = useFormStatus();
  const [values, setValues] = useState<PostData>({
    title: post?.title || "",
    body: post?.body || "",
    tags: post?.tags.join(",") || "",
  });

  return (
    <>
      <div>
        <label>Title:</label>
        <input
          value={values.title}
          type="text"
          name="title"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
        <ErrorForm errors={state.errors.title} />
      </div>
      <div>
        <label>Body:</label>
        <input
          value={values.body}
          type="text"
          name="body"
          onChange={(e) => setValues({ ...values, body: e.target.value })}
        />
        <ErrorForm errors={state.errors.body} />
      </div>
      <div>
        <label>Tags:</label>
        <small>Separate by , (comma)</small>
        <input
          value={values.tags}
          type="text"
          name="tags"
          onChange={(e) => setValues({ ...values, tags: e.target.value })}
        />
        <ErrorForm errors={state.errors.tags} />
      </div>
      <input type="hidden" name="id" value={post?.id} />
      <button disabled={pending}>{pending ? "Saving..." : "Save"}</button>
    </>
  );
};
