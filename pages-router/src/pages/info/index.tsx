import { fetchClient } from "@/common/clientApi/fetchClient";
import MainLayout from "@/common/components/layouts/MainLayout";
import { InfoContent } from "@/types/infoContent.type";
import { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";

export const getStaticProps = async () => {
  const pages = await fetchClient<InfoContent[]>(
    `http://localhost:3004/contents`,
  );

  return {
    props: {
      pages,
      randomNumber: Math.random().toString(),
    },
    revalidate: 15, // Czas w sekundach w jakim next wygeneruje nowy kontent
  };
};

const InfoPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  pages,
  randomNumber,
}) => {
  return (
    <MainLayout>
      <h1>Info pages</h1>
      <h2>random number: {randomNumber}</h2>
      <div>
        {pages.map((page) => (
          <div key={page.id}>
            <Link href={`/info/${page.id}`}>{page.title}</Link>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default InfoPage;
