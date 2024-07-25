import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
  customCLass?: string;
  width?: string | number;
  height?: string | number;
}

export default function CoverImage({ title, coverImage, slug, customCLass, width = 500, height = 500 }: Props) {
  const image = (
    <Image
      width={typeof width === 'number' ? width : undefined}
      height={typeof height === 'number' ? height : undefined}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={cn(customCLass, "shadow-small", {
        "hover:shadow-medium transition-shadow duration-200 border-b-2	": slug
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/news/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
