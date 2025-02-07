import { getAll } from "@/lib/db";
import dayjs from "dayjs";
import type { Post } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export async function PostsTable() {
  const posts = await getAll();

  return (
    <Table className="bg-gray-950 border rounded-md">
      <TableCaption>{posts.length} posts</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="p-3">Title</TableHead>
          <TableHead className="p-3">Type</TableHead>
          <TableHead className="p-3">Date</TableHead>
          <TableHead className="p-3 text-right">Manage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((item: Post) => (
          <TableRow key={item.id}>
            <TableCell className="p-3 font-medium">{item.title}</TableCell>
            <TableCell className="p-3">{item.type}</TableCell>
            <TableCell className="p-3">
              {dayjs(item.datecreated).format("DD MMMM YYYY")}
            </TableCell>
            <TableCell className="p-3 text-right">
              <Link
                href={`/new?post=${item.id}`}
                className="hover:underline hover:underline-offset-4 text-blue-600"
              >
                View
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
