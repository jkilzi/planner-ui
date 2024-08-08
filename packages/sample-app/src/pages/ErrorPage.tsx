import React from "react";

type Props = {
  code: number | string;
  message: string;
};

export const ErrorPage: React.FC<Props> = (props) => {
  const { code, message } = props;
  return (
    <>
      <h1>Something went wrong 💩</h1>
      <pre>
        code: ${code}
        message: ${message}
      </pre>
    </>
  );
};
