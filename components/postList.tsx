import { getPosts, getProjects } from "@/lib/db";
import dayjs from "dayjs";
import type { Post } from "@prisma/client";

export async function PostList() {
  const posts = await getPosts();

  return (
    <ol className="text-sm text-left font-[family-name:var(--font-geist-mono)]">
      {posts.map((item: Post) => (
        <li key={item.id}>
          <a
            className="flex items-center gap-2 hover:underline transition hover:underline-offset-4"
            href={`/post/${item.id}`}
          >
            {item.title} - {dayjs(item.datecreated).format("DD MMMM YYYY")}
          </a>
        </li>
      ))}
    </ol>
  );
}
