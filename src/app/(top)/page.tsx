import { SearchBar } from "@/components/SearchBar";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="h-screen flex items-center justify-center max-w-lg mx-auto px-8">
      <SearchBar />
    </main>
  );
}
