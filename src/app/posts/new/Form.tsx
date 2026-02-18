"use client";

import { FC } from "react";
import { savePost } from "../actions";

export const FormPost: FC = () => {
  return (
    <form action={savePost}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" name="body" />
      </div>
      <div>
        <label>Tags:</label>
        <small>Separate by , (comma)</small>
        <input type="text" name="tags" />
      </div>
      <button>Save</button>
    </form>
  );
};
