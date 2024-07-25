import Spinner from "@/components/Spinner";
import { createNewUser } from "../../utils/prismaQueries";

const NewUser = async () => {
  await createNewUser();

  return <Spinner />;
};

export default NewUser;
