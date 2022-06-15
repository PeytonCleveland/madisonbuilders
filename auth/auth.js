import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Auth = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    if (status !== "loading") {
      if (status === "unauthenticated" && path.includes("/client-portal")) {
        router.push("/auth/client-login");
      }
      if (
        status === "authenticated" &&
        path.includes("/client-portal") &&
        !session.userData.onboarded
      ) {
        router.push("/client-portal/onboarding");
      }
      if (status === "authenticated" && path.includes("/client-login")) {
        router.push("/client-portal");
      }
      if (
        status === "authenticated" &&
        path.includes("/client-portal/onboarding" && session.userData.onboarded)
      ) {
        router.push("/client-portal");
      }
    }
  }, [status, path, session]);

  return status === "loading" ? null : children;
};
export default Auth;
