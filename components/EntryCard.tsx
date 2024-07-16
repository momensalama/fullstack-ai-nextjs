import { Entry } from "@/types";
import Link from "next/link";

const EntryCard = async ({ entry }: { entry: Entry }) => {
  const date = new Date(entry.createdAt).toDateString();

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <time className="px-4 py-5 sm:px-6 block">{date}</time>

      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-semibold">{entry.analysis?.subject}</h3>

        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          {entry.analysis?.summary}
        </p>

        <div className="mt-4">
          <Link
            href={`/journal/${entry.id}`}
            className="text-sm font-semibold text-blue-600 hover:text-blue-500 hover:underline"
          >
            View full entry
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EntryCard;
