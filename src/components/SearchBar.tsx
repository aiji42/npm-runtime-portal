import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-lg px-4 py-6">
      <form action="/search" method="GET" className="flex">
        <input
          className="appearance-none border-none rounded-l w-full py-3 px-3 text-lg text-gray-700 leading-tight"
          name="q"
          id="search"
          type="text"
          placeholder="Search packages"
        />
        <button
          className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-r flex items-center justify-center"
          type="submit"
          title="search"
        >
          <FiSearch />
        </button>
      </form>
    </div>
  );
};
