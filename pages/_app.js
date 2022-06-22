import "../styles/globals.css";
import { Layout } from "../components";
import Head from "next/head";
import Auth from "../auth/auth";
import { SessionProvider } from "next-auth/react";
import smoothscroll from "smoothscroll-polyfill";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  typeof window !== "undefined" && smoothscroll.polyfill();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SessionProvider session={session}>
        <Auth>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Auth>
      </SessionProvider>
    </>
  );
}

export default MyApp;
