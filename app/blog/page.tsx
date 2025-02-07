import { getPosts } from "@/lib/db";
import Footer from "@/components/footer";
import { PostList } from "@/components/postList";
import { Suspense } from "react";

const response = await getPosts();

export default function Blog() {
  return (
    <div className="items-center justify-center min-h-screen p-8 pt-16 sm:pt-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-5 text-xl mix-blend-difference font-black">
        DECLAN WADE
      </header>
      <div className="flex flex-col gap-8 p-5 row-start-2 items-start outline outline-1 outline-white">
        <p className="font-bold">Blog</p>
        <Suspense>
          <PostList />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
