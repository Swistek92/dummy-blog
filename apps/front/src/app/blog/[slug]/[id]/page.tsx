import { fetchPostById } from "@/lib/actions/postActions";
import Image from "next/image";
import DOMPurify from "dompurify";
import SanitizedContent from "./_components/SanitizedContent";
import Comments from "./_components/comments";
import { getSession } from "@/lib/session";
import Like from "./_components/like";

type Props = {
  params: {
    id: string;
  };
};
const PostPage = async ({ params }: Props) => {
  const postId = (await params).id;
  const post = await fetchPostById(+postId);
  const session = await getSession();

  return (
    <main className="container mx-auto px-4 py-8 pt-20 md:pt-25 ">
      <h1 className="text-4xl font-bold mb-4 text-slate-700">{post.title}</h1>
      <p className="text-slate-500 text-sm mb-4">
        By {post.author.name} | {new Date(post.createdAt).toLocaleDateString()}
      </p>

      <div className="relative w-80 h-60 mx-auto mb-6">
        <Image
          // src={post.thumbnail ?? "/no-image.png"}
          src="https://c8.alamy.com/comp/S1M5NE/a-portrait-of-the-joker-from-batman-the-dark-knight-movie-a-man-dressed-S1M5NE.jpg"
          alt={post.title}
          fill
          className="rounded-md object-cover "
        />
      </div>

      <SanitizedContent content={post.content} />

      {/* <Like postId={post.id} user={session?.user} /> */}
      {/* Todo: Put the Post Comments Here */}
      <Comments user={session?.user} postId={post.id} />
    </main>
  );
};

export default PostPage;
