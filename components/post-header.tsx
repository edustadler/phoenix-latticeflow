import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";

export default function PostHeader({
  title,
  coverImage,
  date,
  excerpt,
  author,
  categories,
}) {
  return (
    <>
      <div className="columns-1">
        <PostTitle>{title}</PostTitle>
        <div
        className="text-lg text-center my-0"
        dangerouslySetInnerHTML={{ __html: excerpt }}></div>
      </div>
      <div className="md:my-8 gap-4 flex flex-col items-center justify-center">
        <Date dateString={date} />
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 flex justify-center">
        <CoverImage title={title} coverImage={coverImage} width={960} customCLass={'rounded-xl'}/>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
        </div>
      </div>
    </>
  );
}
