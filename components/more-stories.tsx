import PostPreview from "./post-preview";

interface StoriesProps {
  posts: Array<any>;
  className?: string;
}

export default function MoreStories({ posts, className }: StoriesProps) {
  return (
    <section>

      <div className={`grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-8 lg:gap-x-6 gap-y-10 md:gap-y-8 2xl:col-start-2 ${className}`}>
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
