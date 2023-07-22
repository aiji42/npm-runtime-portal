import { FiGithub, FiTwitter } from "react-icons/fi";
import { SearchBar } from "@/components/SearchBar";
import { ComponentProps } from "react";
import Link from "next/link";

type Props = {
  withSearch?: boolean;
} & Pick<ComponentProps<typeof SearchBar>, "defaultValue">;

export const Header = ({ withSearch, defaultValue }: Props) => {
  return (
    <header className="bg-sky-950 text-white p-3 flex justify-between items-center flex-row-reverse h-14">
      <div className="flex">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 hover:text-gray-300"
          title="repository"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          title="twitter"
        >
          <FiTwitter size={24} />
        </a>
      </div>
      {withSearch && (
        <div className="flex gap-3 items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white">Runtimes</h1>
          </Link>
          <div className="max-w-md">
            <SearchBar narrow defaultValue={defaultValue} />
          </div>
        </div>
      )}
    </header>
  );
};
