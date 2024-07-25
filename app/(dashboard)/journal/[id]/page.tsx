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

  return <Editor entry={entry} />;
};

export default JournalEditorPage;
