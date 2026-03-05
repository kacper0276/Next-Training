import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      This is _app.tsx <Component {...pageProps} />
    </div>
  );
}
