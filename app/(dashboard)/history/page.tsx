import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getAnalyses = async () => {
  const user = await getUserFromClerkID();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    select: {
      sentimentScore: true,
    },
  });

  const sum = analyses.reduce((acc, curr) => acc + curr.sentimentScore, 0);
  const avg = Math.round(sum / analyses.length);

  return { analyses, avg };
};

async function page() {
  const { analyses, avg } = await getAnalyses();
  return <div>History</div>;
}

export default page;
