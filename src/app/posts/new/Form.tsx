"use client";

import { FC } from "react";
import { savePost } from "../actions";
import { useFormState, useFormStatus } from "react-dom";
import { FormState } from "@/types/post.type";
import { ErrorForm } from "@/common/components/ErrorForm/ErrorForm";

export const FormPost: FC = () => {
  const [state, formAction] = useFormState<FormState, FormData>(savePost, {
    errors: {},
  });

  return (
    <form action={formAction}>
      <FormContent state={state} />
    </form>
  );
};

const FormContent: FC<{ state: FormState }> = ({ state }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <div>
        <label>Title:</label>
        <input type="text" name="title" />
        <ErrorForm errors={state.errors.title} />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" name="body" />
        <ErrorForm errors={state.errors.body} />
      </div>
      <div>
        <label>Tags:</label>
        <small>Separate by , (comma)</small>
        <input type="text" name="tags" />
        <ErrorForm errors={state.errors.tags} />
      </div>
      <button disabled={pending}>{pending ? "Saving..." : "Save"}</button>
    </>
  );
};
