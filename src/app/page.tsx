import { SearchBar } from "@/components/SearchBar";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center max-w-lg mx-auto px-8 mt-20">
      <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-800 text-6xl mb-2">
        NPM Runtimes
      </h1>
      <p className="text-md font-bold text-sky-800 mb-6">
        Find Which Runtimes Your NPM Libraries Support
      </p>
      <SearchBar />
    </main>
  );
}
