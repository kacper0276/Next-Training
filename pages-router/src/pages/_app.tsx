import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const newProps = { ...pageProps, customProps: "my app prop" };

  return (
    <div>
      This is _app.tsx <Component {...newProps} />
    </div>
  );
}
