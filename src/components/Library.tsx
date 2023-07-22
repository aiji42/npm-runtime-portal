import { NpmsPackage } from "@/libs/npm";
import { getAvatarURL } from "@/libs/gravatar";
import { AiFillGithub, AiOutlineTags } from "react-icons/ai";
import { FaNpm } from "react-icons/fa";

export const Library = ({ npmPackage }: { npmPackage: NpmsPackage }) => {
  const { name, description, keywords, publisher, links } = npmPackage;
  return (
    <div className="p-4 border rounded-lg bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-700">{name}</h2>
        <div className="flex items-center">
          <p className="text-xs text-gray-500">{publisher.username}</p>
          <img
            className="h-5 w-5 rounded-full ml-2"
            src={getAvatarURL(publisher.email, 40)}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-gray-600 mb-2 mt-1 text-sm">{description}</p>
      {keywords && (
        <div className="flex items-center">
          <span className="w-4 mr-2 text-gray-500">
            <AiOutlineTags />
          </span>
          <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
            {keywords.map((keyword, index) => (
              <span key={index} className="text-xs text-gray-500 mr-2">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-end gap-3 mt-1">
        <a href={links.npm} target="_blank" rel="noopener noreferrer">
          <FaNpm className="text-xl text-gray-500 hover:text-red-500" />
        </a>
        {links.repository && (
          <a href={links.repository} target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="text-xl text-gray-500 hover:text-gray-800" />
          </a>
        )}
      </div>
    </div>
  );
};
