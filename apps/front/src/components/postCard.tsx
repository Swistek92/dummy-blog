import { Post } from "@/lib/types/modelTypes";
import Image from "next/image";
import Link from "next/link";

type Props = Partial<Post>;
const PostCard = ({
  id,
  title,
  slug,
  thumbnail,
  content,
  createdAt,
}: Props) => {
  // console.log(thumbnail);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative h-60 ">
        <Image
          src="https://m.media-amazon.com/images/I/81XLxPu9P3L._AC_SL1100_.jpg"
          // src={thumbnail ?? "/no-image.png"}
          alt={title ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex-grow  flex flex-col">
        <h3 className="text-lg font-bold mt-4 break-words text-center text-gray-600">
          {title}
        </h3>
        <p className="mt-2 text-gray-500 text-sm ">
          {new Date(createdAt ?? "").toLocaleDateString()}
        </p>
        <p className="mt-4 text-gray-700 break-words">
          {content?.slice(0, 100)}...
        </p>
        <Link
          className="text-indigo-600 hover:underline mt-auto text-right block"
          href={`/blog/${slug}/${id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
