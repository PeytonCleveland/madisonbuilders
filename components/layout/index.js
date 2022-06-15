import Footer from "../footer";
import Header from "../header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      {router.pathname.includes("client-login") ||
      router.pathname.includes("client-portal") ? null : (
        <Header />
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
