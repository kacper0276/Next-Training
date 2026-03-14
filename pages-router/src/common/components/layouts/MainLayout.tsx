import { FC, PropsWithChildren } from "react";
import Menu from "../menu/Menu";
import "@/styles/global.scss";
import Head from "next/head";

type MainLayoutProps = {} & PropsWithChildren;

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Default pages router title</title>
        <meta name="description" content="Default layout description" />
      </Head>
      <Menu />
      {children}
    </div>
  );
};

export default MainLayout;
