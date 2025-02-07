"use client";
import React, { useState } from "react";
import Markdown from "react-markdown";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toaster } from "@/components/ui/toaster";
import { createPost, getPost, updatePost } from "@/lib/db";
import {
  Calendar as CalIcon,
  ChevronLeft,
  Save,
  Send,
  Trash,
} from "lucide-react";
import dayjs from "dayjs";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import dynamic from "next/dynamic";

const New = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState<Date>();
  const [id, setId] = useState(0);
  const { toast } = useToast();

  async function handleSave() {
    const response = await createPost(content, title, type, date);
    router.replace(`/new?post=${response.id}`);
  }

  async function preFetch(id: string) {
    const response = await getPost(parseInt(id));
    setTitle(response?.title || "");
    setContent(response?.content || "");
    setDate(response?.datecreated || new Date());
    setType(response?.type || "");
  }

  const handleUpdate = () => {
    updatePost(content, title, type, date, id);
    toast({
      title: "Success",
      description: "Post saved successfully!",
    });
  };

  React.useEffect(() => {
    const search = searchParams.get("post");
    if (search) {
      setId(parseInt(search));
      preFetch(search);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 rounded-lg shadow-md font-[family-name:var(--font-geist-sans)]">
      <h1>Post Editor</h1>
      <Toaster />

      {/* Title Input */}
      <div className="flex text-nowrap items-center space-x-4 ">
        <Label>Title: </Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title..."
          className="w-full p-3 text-lg font-semibold border rounded-md"
        />
      </div>

      {/* Type Select */}
      <div className="flex text-nowrap items-center space-x-4 ">
        <Label>Post type: </Label>
        <Select onValueChange={(e) => setType(e)} value={type}>
          <SelectTrigger className="max-w-32 p-3 border rounded-md">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="blog">Blog</SelectItem>
            <SelectItem value="project">Project</SelectItem>
          </SelectContent>
        </Select>
        <Label>Post date: </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className="">
              <CalIcon className="mr-2 h-4 w-4" />
              {date ? dayjs(date).format("MMMM DD") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Content Input */}
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your content in Markdown..."
        className="w-full h-40 p-3 border rounded-md resize-y"
      />

      {/* Preview */}
      <div className="p-8 border rounded-md bg-gray-950">
        <div className="prose dark:prose-invert font-[family-name:var(--font-geist-sans)]">
          <Markdown>{content}</Markdown>
        </div>
      </div>

      {/* Save Buttons */}
      <footer className="fixed inset-x-0 flex gap-6 p-3 rounded-full place-self-center items-center justify-center outline outline-1 outline-white bottom-10 backdrop-blur-md">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="w-20 rounded-md shadow-md transition-all focus:outline-hidden focus:ring-3 focus:ring-blue-400"
        >
          <ChevronLeft aria-hidden width={16} height={16} />
          Back
        </Button>
        <Button
          onClick={handleSave}
          variant="ghost"
          disabled={
            title.length <= 0 ||
            content.length <= 0 ||
            type.length <= 0 ||
            id != 0
          }
          className="w-20 rounded-md shadow-md transition-all focus:outline-hidden focus:ring-3 focus:ring-blue-400"
        >
          <Send aria-hidden width={16} height={16} />
          Publish
        </Button>
        <Button
          onClick={handleUpdate}
          variant="ghost"
          disabled={
            title?.length <= 0 ||
            content.length <= 0 ||
            type.length <= 0 ||
            id == 0
          }
          className="w-20 rounded-md shadow-md transition-all focus:outline-hidden focus:ring-3 focus:ring-blue-400"
        >
          <Save aria-hidden width={16} height={16} />
          Save
        </Button>
        <Button
          //onClick={
          variant="ghost"
          disabled={
            title?.length <= 0 ||
            content.length <= 0 ||
            type.length <= 0 ||
            id == 0
          }
          className="w-20 rounded-md shadow-md transition-all focus:outline-hidden focus:ring-3 focus:ring-blue-400"
        >
          <Trash aria-hidden width={16} height={16} />
          Delete
        </Button>
      </footer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(New), {
  ssr: false,
});
