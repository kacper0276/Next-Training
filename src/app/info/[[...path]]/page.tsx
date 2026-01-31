import { NextPage } from "next";

type InfoPageProps = {
  params: {
    path: string[];
  };
};

const InfoPage: NextPage<InfoPageProps> = ({ params }) => {
  return (
    <div>
      <h1>Info / folder page</h1>
      params {params.path && params.path.join("/")}
    </div>
  );
};

export default InfoPage;
