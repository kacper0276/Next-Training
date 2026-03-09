import { FC, PropsWithChildren } from "react";
import Menu from "../menu/Menu";
import "@/styles/global.scss";

type MainLayoutProps = {} & PropsWithChildren;

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default MainLayout;
