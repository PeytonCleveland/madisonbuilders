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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta
          name="keywords"
          content="home builder, custom home builder, custom home, construction, residential construction, madison builders, madison, madison builders llc, builder, new construction, alabama, building science, house plans, custom house plans"
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
