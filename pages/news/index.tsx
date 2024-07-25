import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPostsForHome, getAllPostsForNews } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import CustomerLogos from "../../components/customer-logos";
import Link from "next/link";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[3]?.node;
  const morePosts = edges.slice();

  return (
    <Layout preview={preview} className="bg-accent-1">
      <Head>
        <title>Next.js and Latticeflow AI - News</title>
      </Head>
      <div className="bg-[url('/images/oc07.png')] bg-center bg-cover bg-no-repeat">
        <Container className="py-14">
          <Link href={`/news`}>
            <h1 className="text-5xl text-[#333] mb-8">News</h1>
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.featuredImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
          </Link>
        </Container>
        <CustomerLogos className="bg-transparent" />
      </div>
      <Container>
        {morePosts.length > 0 &&
          (
            <>
              <Container className="my-16 px-0 columns-1">
                <MoreStories posts={morePosts} />
              </Container>
            </>
          )}

      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForNews(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};