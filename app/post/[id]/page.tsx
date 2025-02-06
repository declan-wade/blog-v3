import Markdown from 'react-markdown'
import { getPost } from "../../../lib/db";
import dayjs from "dayjs";
import Footer from "@/components/footer";

export default async function Post({ params, }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const response = await getPost(parseInt(id))

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="fixed top-5 text-xl mix-blend-difference font-black">DECLAN WADE</header>
            <main className="flex flex-col gap-8 row-start-2 items-center max-w-2xl">
                <p className="font-bold">
                    {response?.title} • {dayjs(response?.datecreated).format("DD MMMM YYYY")}
                </p>
                <div className="text-sm text-left font-[family-name:var(--font-geist-sans)">
                    <Markdown children={response?.content} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
