import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import { PostProps } from "../components/Post";
import prisma from "../lib/prisma";
import Feed from "../components/Feed";

export const getServerSideProps: GetServerSideProps = async () => {
  let feed = await prisma.question.findMany();
  feed = JSON.parse(JSON.stringify(feed));
  feed = feed.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: { feed },
  };
};

type Props = {
  feed: PostProps[];
};

const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <Layout>
        <div className="text-center">
          <h1 className="font-title">The Internet's Hot Takes</h1>
          <p className="text-sm">
            Developed by{" "}
            <a
              className="underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
              href="https://achintyajha.com"
            >
              Achintya
            </a>
            <br />
            Questions curated by friends and family :)
          </p>
        </div>
        <Feed props={props} />
      </Layout>
    </div>
  );
};

export default Home;
