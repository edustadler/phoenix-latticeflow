import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import CustomerLogos from "../components/customer-logos";

export default function Index({ allPosts: { edges }, preview }) {
  const morePosts = edges.slice();

  return (
    <Layout preview={preview}>
      <Head>
        <title>Next.js and Latticeflow AI</title>
      </Head>
      <Intro />
      <section className="bg-gray-100 py-36">
        <Container className="px-4 md:px-auto">
          {morePosts.length > 0 &&
            (
              <>
                <MoreStories posts={morePosts} className={'px-0 m-auto justify-center 2xl:grid-cols-3'} />
              </>
            )}

        </Container>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
