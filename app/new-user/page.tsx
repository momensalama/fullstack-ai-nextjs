// import { prisma } from "@/utils/db";
import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  });

  console.log("user", user);

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0]?.emailAddress as string,
      },
    });
  }
  redirect("/journal");
};

const NewUser = async () => {
  await createNewUser();

  return <div>...loading</div>;
};

export default NewUser;