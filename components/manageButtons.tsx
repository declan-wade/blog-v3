"use client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { House, Plus } from "lucide-react";

export default function ManageButtons() {
  return (
    <footer className="fixed inset-x-0 flex gap-5 p-3 pl-5 pe-5 rounded-full place-self-center items-center justify-center outline-1 outline-white bottom-10 backdrop-blur-md">
      <a
        href="/"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        <House aria-hidden width={16} height={16} />
        Home
      </a>
      <a
        href="/new"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        <Plus aria-hidden width={16} height={16} />
        New
      </a>
    </footer>
  );
}
