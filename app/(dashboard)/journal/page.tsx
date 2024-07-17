import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import Question from "@/components/Question";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

export const metadata = {
  title: "Journal",
};

const getEntries = async () => {
  const user = await getUserFromClerkID();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      analysis: true,
    },
  });

  return entries;
};

const JournalPage = async () => {
  const entries = await getEntries();

  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <h2 className="text-3xl mb-8">Journal</h2>
      <Question />
      <div className="grid grid-cols-3 gap-4 ">
        <NewEntryCard />
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
