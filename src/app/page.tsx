import { FiSearch, FiGithub, FiTwitter } from "react-icons/fi";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <SearchBar />
      </main>
    </div>
  );
}
