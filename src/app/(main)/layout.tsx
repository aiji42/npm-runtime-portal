"use client";
import { Header } from "@/components/Header";
import { useSearchParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 w-full">
        <Header withSearch defaultValue={searchParams.get("q")} />
      </div>
      <div className="mt-20">{children}</div>
    </div>
  );
}
