import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
// import { fetchPosts } from "@/lib/actions/postActions";
// import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
// import { getSession

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  // const { page } = await searchParams;
  // const { totalPosts, posts } = await fetchPosts({
  //   page: page ? +page : undefined,
  // });
  // const session = await getSession();
  // console.log("%c", "color: green; font-weight: bold;", { session });

  return (
    <main>
      <Hero />
      <Posts
        currentPage={1}
        posts={[]}
        totalPages={Math.floor(Math.random() * 10) + 1}
      />
    </main>
  );
}
