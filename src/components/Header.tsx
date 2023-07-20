import { FiGithub, FiTwitter } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="bg-indigo-400 text-white p-3 flex justify-end">
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
    </header>
  );
};
