import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
      <div>
        <Link href={`/news/${slug}`} className="">
          <div className="card card-compact shadow-xl hover:shadow-2xl hover:shadow-gray-400 duration-300	border border-gray bg-white">
            <figure>
              {coverImage && (
                <CoverImage title={title} coverImage={coverImage} slug={slug} customCLass="height300" />
              )}
            </figure>
            <div className="card-body">
              <h3 className="text-xl min-h-28 mb-3 leading-snug text-neutral-700">
                <Link
                  href={`/news/${slug}`}
                  className="text-gray-600 hover:text-blue-400 duration-300"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></Link>
              </h3>
              <div className="text-lg mb-4">
                <Date dateString={date} />
              </div>
            </div>
          </div>

        </Link>
      </div>
    </>
  );
}
