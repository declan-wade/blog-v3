import Footer from "@/components/footer";
import { ProjectList } from "@/components/projectList";
import { Suspense } from "react";

export default function Projects() {
  return (
    <div className="items-center justify-center min-h-screen p-8 pt-16 sm:pt-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-5 text-xl mix-blend-difference font-black">
        DECLAN WADE
      </header>
      <div className="flex flex-col gap-8 p-5 row-start-2 items-start outline outline-1 outline-white">
        <p className="font-bold">Projects</p>
        <Suspense>
          <ProjectList />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
