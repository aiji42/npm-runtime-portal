import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="bg-sky-950 text-white p-3 flex justify-between items-center h-14">
      <Link href="/">
        <h1 className="text-3xl font-bold text-white">Runtimes</h1>
      </Link>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
};
