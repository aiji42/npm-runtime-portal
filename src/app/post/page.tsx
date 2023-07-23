import { SupportsForm, SupportsFormData } from "@/components/SurpportsForm";
import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import {
  findRuntimeSupportReport,
  upsertRuntimeSupportReport,
} from "@/db/database";

export const runtime = "edge";

const loader = async (packageName: string): Promise<SupportsFormData> => {
  const userId = auth().userId;
  if (!userId) return redirectToSignIn();

  const record = await findRuntimeSupportReport({ packageName, userId });

  if (!record)
    return {
      name: packageName,
      node: undefined,
      browser: undefined,
      workerd: undefined,
      edgeLight: undefined,
      deno: undefined,
      bun: undefined,
    };

  const transform = (s: boolean | null): "works" | "notWorks" | "unknown" =>
    s === true ? "works" : s === false ? "notWorks" : "unknown";

  return {
    name: packageName,
    node: transform(record.node),
    browser: transform(record.browser),
    workerd: transform(record.workerd),
    edgeLight: transform(record.edgeLight),
    deno: transform(record.deno),
    bun: transform(record.bun),
  };
};

const action = async (formData: FormData) => {
  "use server";

  const userId = auth().userId;
  if (!userId) return redirectToSignIn();

  const data = Object.fromEntries(formData.entries()) as SupportsFormData;

  const transform = (s: "works" | "notWorks" | "unknown" | undefined) =>
    s === "works" ? true : s === "notWorks" ? false : null;

  await upsertRuntimeSupportReport({
    packageName: data.name,
    userId,
    node: transform(data.node),
    browser: transform(data.browser),
    workerd: transform(data.workerd),
    edgeLight: transform(data.edgeLight),
    deno: transform(data.deno),
    bun: transform(data.bun),
  });

  redirect("/");
};

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const name = searchParams["name"];
  if (typeof name !== "string" || !name) redirect("/");

  const data = await loader(name);

  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-0">
      <h2 className="text-2xl font-bold mb-2">
        Add runtime supporting for {name}
      </h2>
      <SupportsForm defaultValue={data} action={action} />
    </main>
  );
}
