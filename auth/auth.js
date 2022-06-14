import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Auth = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (
    status === "unauthenticated" &&
    router.pathname.includes("/client-portal")
  ) {
    router.push("/auth/client-login");
  }

  if (
    status === "authenticated" &&
    router.pathname.includes("/auth/client-login")
  ) {
    router.push("/client-portal");
  }

  if (status === "loading") {
    return null;
  }

  return children;
};
export default Auth;
