import Editor from "@/components/Editor";
import { getEntry } from "../../../../utils/prismaQueries";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);

  return {
    title: `Entry ${entry?.id?.slice(0, 8)}`,
    description: entry?.analysis?.summary,
  };
}

const JournalEditorPage = async ({ params }: { params: { id: string } }) => {
  const entry = await getEntry(params.id);

  // Serialize the entry data
  const serializedEntry = {
    ...entry,
    createdAt: entry?.createdAt.toISOString(),
    updatedAt: entry?.updatedAt.toISOString(),
    analysis: entry?.analysis
      ? {
          ...entry.analysis,
          createdAt: entry.analysis.createdAt.toISOString(),
          updatedAt: entry.analysis.updatedAt.toISOString(),
        }
      : null,
  };

  return <Editor entry={serializedEntry} />;
};

export default JournalEditorPage;
