import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
