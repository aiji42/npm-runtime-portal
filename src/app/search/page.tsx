import { fetchNpmLibraries } from "@/libs/npm";
import { Library } from "@/components/Library";
import { redirect } from "next/navigation";
import { SearchBar } from "@/components/SearchBar";
import { SupportsTable } from "@/components/SupportsTable";
import Link from "next/link";
import { aggregateRuntimeSupportStatus } from "@/db/database";
import { Suspense } from "react";

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
      {res.objects.map(({ package: npmPackage }, index) => (
        <Library key={index} npmPackage={npmPackage}>
          <Link
            href={`/post?name=${npmPackage.name}`}
            className="inline-block hover:bg-gray-50 p-2"
          >
            <Suspense
              fallback={
                <div className="w-72 h-11 mt-0.5">
                  <div className="flex-1 space-y-6">
                    <div className="h-3 bg-slate-200 rounded"></div>
                    <div className="h-3 bg-slate-200 rounded"></div>
                  </div>
                </div>
              }
            >
              <ConnectSupports name={npmPackage.name} />
            </Suspense>
          </Link>
        </Library>
      ))}
      {res.objects.length < 1 && (
        <div className="text-center mt-10">
          <p className="text-xl text-gray-600">No results found.</p>
        </div>
      )}
    </main>
  );
}

const ConnectSupports = async ({ name }: { name: string }) => {
  const data = await aggregateRuntimeSupportStatus(name);
  const scores = {
    node: data ? data.supportsNodeCnt / data.totalReportNodeCnt : undefined,
    browser: data
      ? data.supportsBrowserCnt / data.totalReportBrowserCnt
      : undefined,
    workerd: data
      ? data.supportsWorkerdCnt / data.totalReportWorkerdCnt
      : undefined,
    edgeLight: data
      ? data.supportsEdgeLightCnt / data.totalReportEdgeLightCnt
      : undefined,
    deno: data ? data.supportsDenoCnt / data.totalReportDenoCnt : undefined,
    bun: data ? data.supportsBunCnt / data.totalReportBunCnt : undefined,
  };

  return <SupportsTable scores={scores} />;
};
