"use client";
import { createNewEntry } from "@/utils/actions";
import { useRouter } from "next/navigation";

const NewEntryCard = () => {
  const router = useRouter();

  const handleOnClick = async (id: string) => {
    router.push(`/journal/${id}`);
  };
  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <form
          action={() => {
            createNewEntry().then((entry) => handleOnClick(entry.id));
          }}
        >
          <button className="text-3xl">New Entry</button>
        </form>
      </div>
    </div>
  );
};

export default NewEntryCard;
