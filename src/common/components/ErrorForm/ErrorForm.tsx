import { FC } from "react";

type ErrorFormProps = {
  errors: string[] | undefined;
};

export const ErrorForm: FC<ErrorFormProps> = ({ errors }) => {
  return errors && errors.map((error) => <div key={error}>{error}</div>);
};
