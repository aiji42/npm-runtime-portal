import { SearchBar } from "@/components/SearchBar";
import { ComponentProps } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

type Props = {
  withSearch?: boolean;
} & Pick<ComponentProps<typeof SearchBar>, "defaultValue">;

export const Header = ({ withSearch, defaultValue }: Props) => {
  return (
    <header className="bg-sky-950 text-white p-3 flex justify-between items-center flex-row-reverse h-14">
      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="flex gap-3 items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-white">Runtimes</h1>
        </Link>
        {withSearch && (
          <div className="max-w-md">
            <SearchBar narrow defaultValue={defaultValue} />
          </div>
        )}
      </div>
    </header>
  );
};
