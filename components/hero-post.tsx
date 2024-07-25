import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="flex gap-4">
      <div className="w-full">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} width={800} height={500} customCLass={'rounded-2xl shadow-1'} />
        )}
      </div>
      <div className="flex flex-col justify-evenly md:gap-x-16 lg:gap-x-8 w-3/4">
        <div>
          <Date dateString={date} />
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight text-[#333]">
            <Link
              href={`/news/${slug}`}
              className="hover:text-gray-500 duration-300"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </div>
      </div>
    </section>
  );
}
