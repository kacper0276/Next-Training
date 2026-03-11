import { fetchClient } from "@/common/clientApi/fetchClient";
import MainLayout from "@/common/components/layouts/MainLayout";
import { InfoContent } from "@/types/infoContent.type";
import { InferGetStaticPropsType, NextPage } from "next";

type StaticProps = {
  params: {
    slug: string;
  };
};

export const getStaticPaths = async () => {
  const pages = await fetchClient<InfoContent[]>(
    "http://localhost:3004/contents",
  );

  const paths = pages.map((page) => {
    return {
      params: {
        slug: page.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking", // False - nie generuje nowych stron jeśli ich nie znajdzie, True - wygeneruj mi stronę ale nie od razu dawaj jej kontent, 'blocking' - zobaczy tą stronę
  };
};

export const getStaticProps = async ({ params }: StaticProps) => {
  const page = await fetchClient<InfoContent>(
    `http://localhost:3004/contents/${params.slug}`,
  );

  return {
    props: {
      page,
    },
  };
};

const InfoPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  page,
}) => {
  return (
    <MainLayout>
      <h1>{page.title}</h1>
      <p>{page.body}</p>
    </MainLayout>
  );
};

export default InfoPage;
