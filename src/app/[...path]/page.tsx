import { fetchClient } from "@/common/clientApi/fetchClient";
import { InfoContent } from "@/types/infoContent.type";
import { NextPage } from "next";

type InfoPageProps = {
  params: {
    path: string[];
  };
};

const InfoPage: NextPage<InfoPageProps> = async ({ params }) => {
  const content = await fetchClient<InfoContent>(
    `http://localhost:3004/contents/${encodeURIComponent(params.path.join("/"))}`,
  );

  return (
    <div>
      <h1>Info page {content.title}</h1>
      <p>{content.body}</p>
      params {params.path.join("/")}
    </div>
  );
};

export default InfoPage;
