import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ClientPortal = () => {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session || !session.userData.onboarded) {
    router.push("/client-portal/onboarding");
  }

  return (
    <div className="container pt-48 pb-32">
      <h1>Client Portal</h1>
    </div>
  );
};
export default ClientPortal;
