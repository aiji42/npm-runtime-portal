import { runtimes } from "@/constants/runtimes";

const SUPPORT_OPTIONS = ["Works", "Does not work", "Not sure"];

export const SupportsForm = ({
  action,
  defaultValue,
}: {
  action: (data: FormData) => void;
  defaultValue: { name: string };
}) => {
  return (
    <form action={action}>
      <input name="name" type="hidden" value={defaultValue.name} />
      {runtimes.map(({ key: runtime, name: runtimeName, Icon }) => (
        <fieldset key={runtime} className="mb-4">
          <legend className="text-gray-700 mb-1">{runtimeName}</legend>
          <ul className="flex flex-col sm:flex-row">
            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-white border first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg">
              <Icon className="text-xl" />
            </li>
            {SUPPORT_OPTIONS.map((option) => (
              <li
                key={option}
                className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-white border first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg"
              >
                <div className="relative flex items-start w-full">
                  <div className="flex items-center h-5">
                    <input
                      id={`${runtime}-${option}`}
                      name={runtime}
                      type="radio"
                      required
                      value={option}
                    />
                  </div>
                  <label
                    htmlFor={`${runtime}-${option}`}
                    className="ml-3 block w-full text-sm text-gray-600"
                  >
                    {option}
                  </label>
                </div>
              </li>
            ))}
          </ul>
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
