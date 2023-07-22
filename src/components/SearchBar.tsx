import { FiSearch } from "react-icons/fi";

export const SearchBar = ({
  narrow,
  defaultValue,
}: {
  narrow?: boolean;
  defaultValue?: string | null;
}) => {
  return (
    <div className="w-full">
      <form action="/search" method="GET" className="flex">
        <input
          className={`appearance-none border-none rounded-l w-full ${
            narrow ? "py-2 px-3 text-xs" : "py-3 px-3 text-lg"
          } text-gray-600 leading-tight`}
          name="q"
          id="search"
          type="text"
          placeholder="Search packages"
          defaultValue={defaultValue ?? ""}
        />
        <button
          className={`bg-sky-400 hover:bg-sky-500 text-white font-bold ${
            narrow ? "py-2 px-3" : "py-3 px-4"
          } rounded-r flex items-center justify-center`}
          type="submit"
          title="search"
        >
          <FiSearch />
        </button>
      </form>
    </div>
  );
};
