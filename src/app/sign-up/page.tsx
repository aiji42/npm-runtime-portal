import { SignUp } from "@clerk/nextjs";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
      <SignUp />
    </main>
  );
}
