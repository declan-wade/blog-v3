import { House, Bolt, User, Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 flex mx-1 gap-3 p-3 pl-5 pe-5 rounded-full place-self-center items-center justify-center outline outline-1 outline-white bottom-5 backdrop-blur-md">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
      >
        <House aria-hidden width={16} height={16} />
        Home
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/projects"
      >
        <Bolt aria-hidden width={16} height={16} />
        Projects
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/blog"
      >
        <Rss aria-hidden width={16} height={16} />
        Blog
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/about"
      >
        <User aria-hidden width={16} height={16} />
        About
      </a>
    </footer>
  );
}
