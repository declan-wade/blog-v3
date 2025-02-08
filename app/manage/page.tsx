import { PostsTable } from "@/components/postTable";
import { Suspense } from "react";
import ManageButtons from "@/components/manageButtons";

export default function Manage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 shadow-md font-[family-name:var(--font-geist-sans)]">
      <h1>All Posts</h1>
      <Suspense>
        <PostsTable />
        <ManageButtons />
      </Suspense>
    </div>
  );
}
