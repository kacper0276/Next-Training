"use client";

import { FC } from "react";

type ErrorPageProps = {
  error: Error;
};

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  return (
    <div>
      <h1>Custom error page</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
