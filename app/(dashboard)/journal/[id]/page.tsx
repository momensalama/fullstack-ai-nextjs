import Editor from "@/components/Editor";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);

  return {
    title: `Entry ${entry?.id?.slice(0, 8)}`,
    description: entry?.analysis?.summary,
  };
}

const getEntry = async (id: string) => {
  const user = await getUserFromClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  });

  return entry;
};

const JournalEditorPage = async ({ params }: { params: { id: string } }) => {
  const entry = await getEntry(params.id);

  return (
    <div className="w-full h-full">
      <Editor entry={entry} />
    </div>
  );
};

export default JournalEditorPage;
