import { RuntimeKeys, runtimes } from "@/constants/runtimes";
import { AiOutlineCheck, AiOutlineQuestion } from "react-icons/ai";

type RuntimeScores = { [k in RuntimeKeys]: number | undefined };

export const SupportsTable = ({ scores }: { scores: RuntimeScores }) => {
  return (
    <div className="flex justify-start items-center gap-8">
      {runtimes.map(({ key, name, Icon }, index) => (
        <div key={key} className="flex flex-col items-center">
          <div className="mb-4">
            <Icon title={name} className="text-xl" />
          </div>
          {(scores[key] ?? 0) > 0.5 ? (
            <AiOutlineCheck className="text-green-500" />
          ) : (
            <AiOutlineQuestion className="text-gray-500" />
          )}
        </div>
      ))}
    </div>
  );
};
