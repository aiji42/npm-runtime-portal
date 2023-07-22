import { SupportsForm } from "@/components/SurpportsForm";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export const runtime = "edge";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const name = searchParams["name"];
  if (typeof name !== "string" || !name) redirect("/");

  const action = async (data: FormData) => {
    "use server";

    console.log(Object.fromEntries(data.entries()));
    console.log(auth().userId);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-0">
      <h2 className="text-2xl font-bold mb-2">
        Add runtime supporting for {name}
      </h2>
      <SupportsForm defaultValue={{ name }} action={action} />
    </main>
  );
}
