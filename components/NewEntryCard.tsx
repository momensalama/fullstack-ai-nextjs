"use client";
import { createNewEntry } from "@/utils/actions";
import { useRouter } from "next/navigation";

const NewEntryCard = () => {
  const router = useRouter();

  const handleOnClick = async (id: string) => {
    router.push(`/journal/${id}`);
  };
  return (
    <form
      action={() => {
        createNewEntry().then((entry) => handleOnClick(entry.id));
      }}
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow px-4 py-5 sm:p-6 "
    >
      <button className="text-3xl">New Entry</button>
    </form>
  );
};

export default NewEntryCard;
