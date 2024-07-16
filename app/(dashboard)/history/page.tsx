import HistoryChart from "@/components/HistoryChart";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getAnalyses = async () => {
  const user = await getUserFromClerkID();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const sum = analyses.reduce((acc, curr) => acc + curr.sentimentScore, 0);
  const average = Math.round(sum / analyses.length);

  return { analyses, average };
};

async function page() {
  const { analyses, average } = await getAnalyses();
  return (
    <div className="h-full w-full px-6 py-8">
      <h2 className="text-2xl mb-4">{`Avg. Sentiment: ${average || 0}`}</h2>
      <HistoryChart data={analyses} />
    </div>
  );
}

export default page;
