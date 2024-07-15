"use client";
import { useState } from "react";
import { useAutosave } from "react-autosave";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";
import { updateEntry } from "@/utils/actions";

const Editor = ({ entry }: any) => {
  const [text, setText] = useState(entry.content);
  const [currentEntry, setEntry] = useState(entry);
  const [isSaving, setIsSaving] = useState(false);

  const { mood, negative, subject, summary, color } = entry.analysis;

  const analysisData = [
    {
      name: "Mood",
      value: mood,
    },
    {
      name: "Subject",
      value: subject,
    },
    {
      name: "Negative",
      value: negative ? "Yes" : "No",
    },
  ];

  const router = useRouter();

  const handleDelete = async () => {
    // await deleteEntry(entry.id);
    router.push("/journal");
  };

  useAutosave({
    data: text,
    onSave: async (_text) => {
      if (_text === entry.content) return;
      setIsSaving(true);

      const data = await updateEntry(entry.id, _text);

      setEntry(data);
      setIsSaving(false);
    },
  });

  return (
    <div className="w-full h-full grid grid-cols-3 gap-0 relative">
      <div className="absolute left-0 top-0 p-2">
        {isSaving ? (
          <Spinner />
        ) : (
          <div className="w-[16px] h-[16px] rounded-full bg-green-500"></div>
        )}
      </div>
      <div className="col-span-2">
        <textarea
          value={text}
          name="content"
          onChange={(e) => setText(e.target.value)}
          className="w-full h-full text-xl p-8"
        />
      </div>
      <div className="border-l border-black/5">
        <div
          className="h-[100px] text-white p-8"
          style={{
            backgroundColor: color,
          }}
        >
          <h2 className="text-2xl bg-white/25 text-black">Analysis</h2>
        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-200">
            <li className="py-4 px-8 ">
              <div className="text-xl font-semibold w-1/3">Summary</div>
              <div className="text-xl">{summary}</div>
            </li>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="py-4 px-8 flex items-center justify-between"
              >
                <div className="text-xl font-semibold w-1/3 me-3">
                  {item.name}
                </div>
                <div className="text-xl">{item.value}</div>
              </li>
            ))}

            <li className="py-4 px-8 flex items-center justify-between">
              <button
                onClick={handleDelete}
                type="button"
                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Editor;
