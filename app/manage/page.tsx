import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getAll } from "@/lib/db";
import dayjs from "dayjs";
import Link from "next/link";

const posts = await getAll()

export default function Manage() {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6 rounded-lg shadow-md font-[family-name:var(--font-geist-sans)]">
            <Table>
                <TableCaption>All posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Manage</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.title}</TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>{dayjs(item.datecreated).format("DD MMMM YYYY")}</TableCell>
                            <TableCell className="text-right"><Link href={`/new?post=${item.id}`} className="hover:underline hover:underline-offset-4 text-blue-600">View</Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}