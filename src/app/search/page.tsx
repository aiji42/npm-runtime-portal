import { fetchNpmLibraries } from "@/libs/npm";
import { Library } from "@/components/Library";
import { redirect } from "next/navigation";
import { SearchBar } from "@/components/SearchBar";

export const runtime = "edge";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const q = searchParams["q"];
  if (typeof q !== "string" || !q) redirect("/");

  const res = await fetchNpmLibraries(q);

  return (
    <main className="flex flex-col gap-y-4 max-w-2xl mx-auto">
      <SearchBar defaultValue={q} />
      {res.results.map(({ package: npmPackage }, index) => (
        <Library key={index} npmPackage={npmPackage} />
      ))}
      {res.results.length < 1 && (
        <div className="text-center mt-10">
          <p className="text-xl text-gray-600">No results found.</p>
        </div>
      )}
    </main>
  );
}
