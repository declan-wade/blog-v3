import { getPosts, getProjects } from "@/lib/db";
import dayjs from "dayjs";
import Footer from "@/components/footer";

const response = await getProjects()

export default function Projects() {
    console.log(response)
    return (
        <div className="items-center justify-center min-h-screen p-8 pt-16 sm:pt-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="fixed top-5 text-xl mix-blend-difference font-black">DECLAN WADE</header>
            <div className="flex flex-col gap-8 p-5 row-start-2 items-start outline outline-1 outline-white">
                <p className="font-bold">
                    Projects
                </p>
                <ol className="text-sm text-left font-[family-name:var(--font-geist-mono)]">
                    {response.map((item) => (
                        <li key={item.id}>
                            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href={`/post/${item.id}`}>
                                {item.title} - {dayjs(item.datecreated).format("DD MMMM YYYY")}</a></li>
                    ))}
                </ol>
            </div>
            <Footer />
        </div>
    );
}
