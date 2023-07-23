import { runtimes, RuntimeKeys } from "@/constants/runtimes";

const SUPPORT_OPTIONS = [
  { label: "Works", value: "works" },
  { label: "Does not work", value: "notWorks" },
  { label: "Not sure", value: "unknown" },
] as const;

export type SupportsFormData = {
  name: string;
} & {
  [key in RuntimeKeys]: (typeof SUPPORT_OPTIONS)[number]["value"] | undefined;
};

export const SupportsForm = ({
  action,
  defaultValue,
}: {
  action: (data: FormData) => void;
  defaultValue: SupportsFormData;
}) => {
  return (
    <form action={action}>
      <input name="name" type="hidden" value={defaultValue.name} />
      {runtimes.map(({ key: runtime, name: runtimeName, Icon }) => (
        <fieldset key={runtime} className="mb-4">
          <legend className="text-gray-700 mb-1">{runtimeName}</legend>
          <div className="flex flex-col sm:flex-row">
            <div className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-white border first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg">
              <Icon className="text-xl" />
            </div>
            {SUPPORT_OPTIONS.map(({ label, value }) => (
              <label
                key={value}
                className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-white border first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="relative flex items-start w-full">
                  <div className="flex items-center h-5">
                    <input
                      id={`${runtime}-${value}`}
                      name={runtime}
                      type="radio"
                      required
                      value={value}
                      defaultChecked={defaultValue[runtime] === value}
                    />
                  </div>
                  <span className="ml-3 block w-full text-sm text-gray-600">
                    {label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <button
        type="submit"
        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};
