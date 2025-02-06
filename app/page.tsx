import { getPosts, getProjects } from "@/lib/db";
import dayjs from "dayjs";
import Footer from "@/components/footer";

const posts = await getPosts()
const projects = await getProjects()

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen p-8 pt-16 sm:pt-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-5 text-xl mix-blend-difference font-black">DECLAN WADE</header>
      <div className="flex flex-col gap-8 p-5 row-start-2 items-start outline outline-1 outline-white">
        <a className="font-bold hover:underline hover:underline-offset-4" href="/blog">
          Blog
        </a>
        <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {posts.map((item) => (
            <li key={item.id}>
              <a
                className="flex items-center gap-2 hover:underline transition hover:underline-offset-4"
                href={`/post/${item.id}`}
              >{item.title} - {dayjs(item.datecreated).format("DD MMMM YYYY")}</a></li>
          ))}
        </ol>
      </div>
      <br></br>
      <div className="flex flex-col gap-8 p-5 row-start-2 items-start outline outline-1 outline-white">
        <a className="font-bold hover:underline hover:underline-offset-4" href="/projects">
          Projects
        </a>
        <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {projects.map((item) => (
            <li key={item.id}>
              <a
                className="flex items-center gap-2 hover:underline transition hover:underline-offset-4"
                href={`/post/${item.id}`}
              >{item.title} - {dayjs(item.datecreated).format("DD MMMM YYYY")}</a></li>
          ))}
        </ol>
      </div>
      <br></br>
      <div className="flex flex-col gap-8 p-5 row-start-2 items-start outline outline-1 outline-white">
        <a className="font-bold hover:underline transition hover:underline-offset-4" href="/about">
          About
        </a>
        <div className="text-sm text-left font-[family-name:var(--font-geist-sans)]">
          👋 Hey, I’m an experianced Business Analyst and self-taught web developer.
          <br />
          <br />
          My passion is helping businesses of all sizes develop and deploy efficient business tools, apps and processes. I have industry experience leveraging Microsoft Power Platform, Sharepoint, React, TypeScript and Python.
          <br />
          <br />
          👆 Click on Projects above to learn more about some of the projects I have worked on.
        </div>
      </div>
      <Footer />
    </div>
  );
}
